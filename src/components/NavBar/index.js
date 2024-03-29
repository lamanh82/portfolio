import React, { useEffect, useState } from "react";
import $ from "jquery";
import logo1 from "../../img/logo.svg";
import logo2 from "../../img/logo2.svg";

const Navbar = () => {
    const [setLogo] = useState(logo1);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const togglerHandle = () => {
        const mainNav = $("#mainNav");

        if (!mainNav.hasClass("navbar-reduce")) {
            mainNav.addClass("navbar-reduce");
            setLogo(logo2);
        } else {
            mainNav.removeClass("navbar-reduce");
            setLogo(logo1);
        }
    };

    useEffect(() => {
        const nav = $("nav");
        let navHeight = nav.outerHeight();

        $(".navbar-toggler").on("click", togglerHandle);

        $("body").scrollspy({
            target: "#mainNav",
            offset: navHeight,
        });

        $(".js-scroll").on("click", () => {
            $(".navbar-collapse").collapse("hide");
        });

        $(window).on("scroll", () => {
            const scrollOffset = window.pageYOffset;
            const navbarExpandMd = document.querySelector(".navbar-expand-md");

            if (scrollOffset > 50) {
                navbarExpandMd.classList.add("navbar-reduce");
                navbarExpandMd.classList.remove("navbar-trans");
                setLogo(logo2);
            } else {
                navbarExpandMd.classList.add("navbar-trans");
                navbarExpandMd.classList.remove("navbar-reduce");
                setLogo(logo1);
            }
        });

        $('a.js-scroll[href*="#"]:not([href="#"])').on("click", function () {
            const target = $($(this).attr("href"));
            if (target.length) {
                $("html, body").animate(
                    {
                        scrollTop: target.offset().top - navHeight + 5,
                    },
                    1000,
                    "easeInExpo"
                );
                return false;
            }
        });

        $(".js-scroll").on("click", () => {
            $(".navbar-collapse").collapse("hide");
        });

        return () => {
            // Cleanup
            $(".navbar-toggler").off("click", togglerHandle);
            $("body").off("scroll", togglerHandle);
            $('a.js-scroll[href*="#"]:not([href="#"])').off("click");
            $(".js-scroll").off("click");
        };
    }, [setLogo, togglerHandle]); // Empty dependency array ensures the effect runs only once on mount

    return (
        <nav className="navbar navbar-b navbar-trans navbar-expand-md fixed-top" id="mainNav">
            <div className="container">
                <a className="navbar-brand js-scroll" href="#page-top">
                    <i className="fa-brands fa-aws logo"></i>
                </a>
                <button
                    className="navbar-toggler collapsed"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarDefault"
                    aria-controls="navbarDefault"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
                <div className="navbar-collapse collapse justify-content-end" id="navbarDefault">
                    <ul className="navbar-nav">
                        <NavItem target="home" label="Home" />
                        <NavItem target="about" label="About" />
                        <NavItem target="skills" label="Skills & Experience" />
                        <NavItem target="education" label="Education" />
                        <NavItem target="blog" label="Blogs" />
                        <NavItem target="contact" label="Contact" />
                    </ul>
                </div>
            </div>
        </nav>
    );
};

const NavItem = ({ target, label }) => (
    <li className="nav-item">
        <a className="nav-link js-scroll" href={`#${target}`}>
            {label}
        </a>
    </li>
);

export default Navbar;
