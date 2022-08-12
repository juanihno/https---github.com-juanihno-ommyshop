import { Link, useHistory, useLocation } from 'react-router-dom'
import './product.css'
import Chart from '../../components/chart/Chart'
import { Publish } from '@material-ui/icons'
import { useSelector } from 'react-redux'
import { useEffect, useMemo, useState } from 'react'
import { userRequest } from '../../requestMethods'
import { updateProduct } from '../../redux/apiCalls'
import { useDispatch } from 'react-redux'
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from 'firebase/storage'
import app from '../../firebase'
export default function Product() {
  const location = useLocation()
  const productId = location.pathname.split('/')[2]
  const [pStats, setPStats] = useState([])
  const product = useSelector((state) =>
    state.product.products.find((product) => product._id === productId)
  )
  const dispatch = useDispatch()
  const [inputs, setInputs] = useState({
    title: product?.title || '',
    desc: product?.desc || '',
    price: product?.price || '',
    stock: product?.inStock || false,
  })

  const [file, setFile] = useState(null)
  const [cat, setCat] = useState(product?.categories || [])
  const [size, setSize] = useState(product?.size || [])
  const [color, setColor] = useState(product?.color || [])

  const history = useHistory()
  //   const handleChange=(e)=>{
  //     setInputs((prev) => {
  //         return { ...prev, [e.target.name]: e.target.value };
  //       });
  // }
  // console.log(inputs);
  // const handleUpdate=async()=>{

  // await updateProduct(productId, inputs , dispatch)

  // // await axios.put('http://localhost:5000/api/products/`$productId`', inputs, productId)
  // // .then(response=>console.log(response.data))

  //     }
  const handleChange = (e) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value }
    })
  }
  const handleCat = (e) => {
    setCat(e.target.value.split(','))
  }

  const handleSize = (e) => {
    setSize(e.target.value.split(','))
  }

  const handleColor = (e) => {
    setColor(e.target.value.split(','))
  }

  const handleClick = (e) => {
    e.preventDefault()
    if (file) {
      const fileName = new Date().getTime() + file.name
      const storage = getStorage(app)
      const storageRef = ref(storage, fileName)
      const uploadTask = uploadBytesResumable(storageRef, file)
      // Register three observers:
      // 1. 'state_changed' observer, called any time the state changes
      // 2. Error observer, called on failure
      // 3. Completion observer, called on successful completion
      uploadTask.on(
        'state_changed',
        (snapshot) => {
          // Observe state change events such as progress, pause, and resume
          // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          console.log('Upload is ' + progress + '% done')
          switch (snapshot.state) {
            case 'paused':
              console.log('Upload is paused')
              break
            case 'running':
              console.log('Upload is running')
              break
            default:
          }
        },
        (error) => {
          // Handle unsuccessful uploads
        },

        () => {
          // Handle successful uploads on complete
          // For instance, get the download URL: https://firebasestorage.googleapis.com/...

          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            const product = {
              ...inputs,
              img: downloadURL,
              categories: cat,
              size: size,
              color: color,
            }
            updateProduct(productId, product, dispatch)
          })
        }
      )
    } else {
      const product = {
        _id: productId,
        ...inputs,
        categories: cat,
        size: size,
        color: color,
      }
      updateProduct(productId, product, dispatch).then(() => {
        history.push('/products')
      })
    }
  }

  const MONTHS = useMemo(
    () => [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Agu',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ],
    []
  )

  useEffect(() => {
    const getStats = async () => {
      try {
        const res = await userRequest.get('orders/income?pid=' + productId)
        const list = res.data.sort((a, b) => {
          return a._id - b._id
        })
        list.map((item) =>
          setPStats((prev) => [
            ...prev,
            { name: MONTHS[item._id - 1], Sales: item.total },
          ])
        )
      } catch (err) {
        console.log(err)
      }
    }
    getStats()
  }, [productId, MONTHS])

  return (
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle">Product</h1>
        <Link to="/newproduct">
          <button className="productAddButton">Create</button>
        </Link>
      </div>
      <div className="productTop">
        <div className="productTopLeft">
          <Chart data={pStats} dataKey="Sales" title="Sales Performance" />
        </div>
        <div className="productTopRight">
          <div className="productInfoTop">
            <img src={product?.img} alt="" className="productInfoImg" />
            <span className="productName">{product?.title}</span>
          </div>
          <div className="productInfoBottom">
            <div className="productInfoItem">
              <span className="productInfoKey">id:</span>
              <span className="productInfoValue">{product?._id}</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">sales:</span>
              <span className="productInfoValue">5123</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">in stock:</span>
              <span className="productInfoValue">{product?.inStock}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="productBottom">
        <form className="productForm">
          <div className="productFormLeft">
            <label>Product Name</label>
            <input
              type="text"
              placeholder={product?.title}
              name="title"
              value={inputs.title}
              onChange={handleChange}
            />
            <label>Product Description</label>
            <input
              type="text"
              placeholder={product?.desc}
              name="desc"
              value={inputs.desc}
              onChange={handleChange}
            />
            <label>Product Price</label>
            <input
              type="text"
              placeholder={product?.price}
              name="price"
              value={inputs.price}
              onChange={handleChange}
            />
            <div className="addProductItem">
              <label>Categories</label>
              <input
                type="text"
                placeholder="jeans,skirts"
                value={cat.join(',')}
                onChange={handleCat}
              />
            </div>
            <div className="addProductItem">
              <label>Size</label>
              <input
                type="text"
                placeholder="XL,L,M,S"
                value={size.join(',')}
                onChange={handleSize}
              />
            </div>
            <div className="addProductItem">
              <label>Color</label>
              <input
                type="text"
                placeholder="blue,yellow,black"
                value={color.join(',')}
                onChange={handleColor}
              />
            </div>

            <label>In Stock</label>
            <select
              name="inStock"
              id="idStock"
              value={inputs.stock}
              onChange={handleChange}
            >
              <option value="true">Yes</option>
              <option value="false">No</option>
            </select>
          </div>

          <div className="productFormRight">
            <div className="productUpload">
              <img src={product?.img} alt="" className="productUploadImg" />
              <label htmlFor="file">
                <Publish />
              </label>
              <input
                type="file"
                id="file"
                style={{ display: 'none' }}
                onChange={(e) => setFile(e.target.files[0])}
              />
            </div>
            <button className="productButton" onClick={handleClick}>
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
