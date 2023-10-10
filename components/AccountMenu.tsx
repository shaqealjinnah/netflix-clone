import useAuth from "@/hooks/useAuth";
import { ChevronDownIcon } from "@heroicons/react/solid";
import { Button, Menu, MenuItem } from "@mui/material";
import React, {useState} from "react";

export default function AccountMenu() {
    const { logout } = useAuth();
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
    const open = Boolean(anchorEl)
  
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget)
    }
  
    const handleClose = () => {
      setAnchorEl(null)
    }
  
    return (
      <div className="md:!hidden">
        <Button
          id="basic-button"
          aria-controls={open ? 'basic-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
          className="!capitalize !text-white"
        >
          <img src="https://rb.gy/g1pwyx" alt="" className="rounded" />
          <ChevronDownIcon className={`w-4 ml-1 text-white fill-white transition duration-300 ${
                open === true ? "rotate-180" : "rotate-0"
              }`}/>
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          className="account mr-2"
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
        >
          <MenuItem onClick={logout} className="!cursor-pointer">Sign out of Netflix</MenuItem>
        </Menu>
      </div>
    )
  }
