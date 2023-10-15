import React from "react";
import { MdNotifications, MdSearch } from "react-icons/md";
import Avater from "../../assets/Avatar1.png";
import { StyledHeader,StyledHeaderForm } from "./style";

const Header = () => {
  return (
    <StyledHeader>
      <StyledHeaderForm action="">
        <button type="submit">
          <MdSearch size={30} color="rgba(255,255,255,0.5)" />
        </button>
        <input type="text" name="search" id="search" placeholder="Buscar..." />
      </StyledHeaderForm>
      <div className="userMenu">
        <button>
          <MdNotifications size={30} color="rgba(255,255,255,0.5)" />
        </button>
        <img src={Avater} alt="username" />
      </div>
    </StyledHeader>
  );
};

export default Header;
