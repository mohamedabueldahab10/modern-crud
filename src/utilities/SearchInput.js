import React from "react";
import { useFormContext } from "react-hook-form";
import SearchIcon from "@mui/icons-material/Search";

export default function SearchInput(props) {
  const methods = useFormContext();
  return (
    <div>
      <input
        type="text"
        {...props}
        placeholder={props.placeholder}
        {...methods.register("search")}
      />
      <div onClick={props.submitFn}>
        <SearchIcon />
      </div>
    </div>
  );
}
