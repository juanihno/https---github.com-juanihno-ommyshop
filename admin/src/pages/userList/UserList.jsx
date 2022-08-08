import "./userList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, getUsers } from "../../redux/apiCalls";

export default function UserList() {
  // const [data, setData] = useState(userRows);

  // const handleDelete = (id) => {
  //   setData(data.filter((item) => item.id !== id));
  // };
  const dispatch = useDispatch();
  const users = useSelector((state) => state.user.products);
  //console.log(users);

  useEffect(() => {
    getUsers(dispatch);

  }, [dispatch]);

  const handleDelete = (id) => {
    deleteUser(id, dispatch);
    console.log(id);

  };
  const columns = [
    { field: "_id", headerName: "ID", width: 90 },
    {
      field: "username",
      headerName: "User",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="userListUser">
            <img className="userListImg" src={params.row.avatar} alt="" />
            {params.row.username}
          </div>
        );
      },
    },
    { field: "email", headerName: "Email", width: 200 },
    { field: "password", headerName: "Password", width: 200 },
    { field: "createdAt", headerName: "CreatedAt", width: 200 },
    { field: "updatedAt", headerName: "UpdatedAt", width: 200 },


    // {createdAt
    //   field: "status",
    //   headerName: "Status",
    //   width: 120,
    // },
    // {
    //   field: "transaction",
    //   headerName: "Transaction Volume",
    //   width: 160,
    // },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            
            <DeleteOutline
              className="userListDelete"
              onClick={() => 
                handleDelete(params.row._id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <><div className="userList">
      <Link to="/newUser">
          <button className="userAddButton">Create New</button>
        </Link>
      <DataGrid
        rows={users}
        disableSelectionOnClick
        columns={columns}
        getRowId={(row) => row._id}
        pageSize={8}
        checkboxSelection />
       
    </div>
    </>
  );
}
