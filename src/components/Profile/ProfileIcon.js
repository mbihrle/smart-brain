import React from "react";

import {
    Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
} from "reactstrap";

class ProfileIcon extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dropdownOpen: false,
        };
    }

    removeAuthTokenInSession = (tokenKey) => {
        window.sessionStorage.removeItem(tokenKey);
    };

    onSignOut = () => {
        const tokenKey = "token";
        const token = window.sessionStorage.getItem(tokenKey);
        this.removeAuthTokenInSession(tokenKey);
        fetch("http://localhost:3000/signout", {
            method: "post",
            headers: {
                "Content-Type": "application/json",
                Authorization: token,
            },
            body: JSON.stringify({}),
        })
            .then((response) => response.json())
            .then((data) => console.log(data));
        this.props.onRouteChange("signout");
    };

    toggle = () => {
        this.setState((prevState) => ({
            dropdownOpen: !prevState.dropdownOpen,
        }));
    };

    render() {
        return (
            <Dropdown
                className="mt4"
                isOpen={this.state.dropdownOpen}
                toggle={this.toggle}
            >
                <DropdownToggle
                    tag="span"
                    data-toggle="dropdown"
                    aria-expanded={this.state.dropdownOpen}
                >
                    <img
                        src="http://tachyons.io/img/logo.jpg"
                        className="ma4 br-100 ba h4 w4 dib"
                        alt="avatar"
                    />
                </DropdownToggle>
                <DropdownMenu
                    right
                    className="mt5 b--transparent shadow-5"
                    style={{
                        backgroundColor: "rgba(255, 255, 255, 0.5)",
                    }}
                >
                    <DropdownItem onClick={this.props.toggleModal}>
                        View Profile
                    </DropdownItem>
                    <DropdownItem onClick={this.onSignOut}>
                        Sign Out
                    </DropdownItem>
                </DropdownMenu>
            </Dropdown>
        );
    }
}

export default ProfileIcon;
