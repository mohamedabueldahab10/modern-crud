import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Modal, Box } from "@mui/material";
import UpdateProductModal from "./UpdateProductModal";
import DeleteProductModal from "./DeleteProductModal";
import rowData from "./data.json";
import { EditSvg, DeleteSvg, StyledInputBase } from "./utilities";
export default function GridTableProducts() {
  const [fetched , setFetched] = useState(null)
    const fetchData = async () => {
      try {
        const response = await fetch('https://cdn.jsdelivr.net/gh/Swimlane/angular-data-table@master/demos/data/complex-100000.json');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const jsonData = await response.json();
        setFetched(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  const rows = rowData.map((item) => ({
    ...item,
    city: item.address.city,
    state: item.address.state,
  }));
  const [data, setData] = useState(rows);

  const [pageSize, setPageSize] = useState(10);
  const [deleteButton, setDeleteButton] = useState(false);
  const [edit, setEdit] = useState(false);
  const [currentRow, setCurrentRow] = useState({});
  const handleDelete = () => setDeleteButton(true);
  const handleCloseDelete = () => setDeleteButton(false);
  const handleEdit = () => setEdit(true);
  const handleClose = () => setEdit(false);
  const columns = [
    {
      field: "id",
      headerName: "ID",
      editable: false,
      width: 200,
      sortable: true,
    },
    {
      field: "name",
      headerName: "Name",
      editable: false,
      width: 200,
      sortable: true,
    },
    {
      field: "gender",
      headerName: "Gender",
      editable: false,
      width: 200,
      sortable: false,
    },

    {
      field: "age",
      headerName: "Age",
      width: 200,
      sortable: false,
    },
    {
      field: "city",
      headerName: "City",
      editable: false,
      width: 200,
      sortable: false,
    },
    {
      field: "state",
      headerName: "State",
      editable: false,
      width: 200,
      sortable: false,
    },
    {
      field: "Actions",
      headerName: "Actions",
      width: 200,
      sortable: false,
      renderCell: ({ row }) => {
        return (
          <strong>
            <Box
              sx={{
                display: "flex",
              }}
            >
              <Box
                onClick={() => {
                  handleEdit();
                  setCurrentRow(row);
                }}
              >
                <EditSvg />
              </Box>
              <Box
                onClick={() => {
                  setCurrentRow(row);
                  handleDelete();
                }}
              >
                <DeleteSvg />
              </Box>
            </Box>
          </strong>
        );
      },
    },
  ];

  const [filterState, setFilterState] = useState('');
  const [filterCity, setFilterCity] = useState('');
  const [filterAge, setFilterAge] = useState(0);
  const [filterGender, setFilterGender] = useState('');
  const [filterName, setFilterName] = useState('');
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    if (name === 'state') {
      setFilterState(value);
    } 
    else if (name === 'city') {
      setFilterCity(value);
    }
    else if (name === 'age') {
      setFilterAge(value);
    }
    else if (name === 'gender') {
      setFilterGender(value);
    }
    else if (name === 'name') {
      setFilterName(value);
    }
  };
  const filteredRows = data.filter(row => {
    return (
      (!filterState || row.address.state.toLowerCase().includes(filterState.toLowerCase())) &&
      (!filterCity || row.address.city.toLowerCase().includes(filterCity.toLowerCase())) && 
      (!filterAge || row.age.toString().includes(filterAge)) && 
      (!filterGender || row.gender.toLowerCase().includes(filterGender.toLowerCase())) && 
      (!filterName || row.name.toLowerCase().includes(filterName.toLowerCase()))
    );
  });
  return (
    <Box>
      <Modal open={edit}>
        <UpdateProductModal handleClose={handleClose} currentRow={currentRow} setData={setData} />
      </Modal>
      <Modal open={deleteButton}>
        <DeleteProductModal
          handleCloseDelete={handleCloseDelete}
          currentRow={currentRow}
          setData={setData}
        />
      </Modal>
      <Box sx={{display:"flex",justifyContent:"center",alignItems:"center", flexWrap:"wrap", gap:"10px" , marginBlock:"10px"}}>
      <StyledInputBase
                type="text"
                placeholder="Filter by Name"
                name="name"
                value={filteredRows.name}
                onChange={handleFilterChange}
            />
            {/* Filter by Gender */}
            <StyledInputBase
                type="text"
                placeholder="Filter by Gender"
                name="gender"
                value={filteredRows.gender}
                onChange={handleFilterChange}
            />
            {/* Filter by Age */}
            <StyledInputBase
                type="number"
                placeholder="Filter by Age"
                name="age"
                value={filteredRows.age}
                onChange={handleFilterChange}
            />
            {/* Filter by City */}
            <StyledInputBase
                type="text"
                placeholder="Filter by City"
                name="city"
                value={filteredRows.city}
                onChange={handleFilterChange}
            />
            {/* Filter by State */}
            <StyledInputBase
                type="text"
                placeholder="Filter by State"
                name="state"
                value={filteredRows.state}
                onChange={handleFilterChange}
            />

      </Box>
      <Box sx={{ height: "650px", width: "100%" }}>
        <DataGrid
          pageSize={pageSize}
          onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
          rowsPerPageOptions={[10, 25, 100]}
          pagination
          rows={filteredRows ?? []}
          columns={columns}
          // loading={isLoading}
          getRowId={(rowData) => {
            return rowData.id;
          }}
          hideFooterSelectedRowCount
        />
      </Box>
    </Box>
  );
}
