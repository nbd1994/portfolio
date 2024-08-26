import React from "react";
import {
  useParams,
  unstable_useViewTransitionState,
  Link,
  useNavigate,
} from "react-router-dom";
// import { flushSync } from "react-dom";
import "./singleProject.css";
import { projects } from "./data";
import "./components/linksLogo.css";
import { FaGithub, FaHome } from "react-icons/fa";

import { CgWebsite } from "react-icons/cg";
import "./redirectLinks.css";
const SingleProject = () => {
  const { id } = useParams();
  const project = projects.find((project) => project.id == id);
  const [isImageTransition, setIsImageTransition] = React.useState(false);
  // const [isFullImage, setIsFullImage] = React.useState(false);

  const homeUrl = `/`;
  const isTransitioning = unstable_useViewTransitionState(homeUrl);
  const navigate = useNavigate();
  // const toggleImageState = () => setIsFullImage((state) => !state);
  return (
    <section>
      <div>
        <img
          style={{
            viewTransitionName:
              isTransitioning || isImageTransition ? "item-image" : "",
          }}
          // className={
          //   isFullImage ? "item__image item__image--active" : "item__image"
          // }
          className="item__image h-screen w-full object-cover"
          src={project.imgUrl}
          alt=""
        />
        <div className="z-40 absolute left-0 top-0 bg-none mx-auto">
          <div className="mx-5 md:ml-[100px] lg:ml-[230px] mt-[80px] flex flex-col md:flex-row md:space-x-20 space-y-6">
            <div className="space-y-6 max-w-[330px]">
              {/* <FaHome /> */}
              <div
                className="w-fit secondary-color logo-effect text-2xl p-2
                hover:text-gray-800 hover:rounded-full 
                hover:cursor-pointer"
                onClick={() => navigate(-1)}
              >
                <FaHome />
                {/* &larr; */}
              </div>
              <h4 className="text-4xl font-bold">{project.longTitle}</h4>
              <div className="flex flex-wrap  space-y-2">
                <h4 className="w-full">Technologies Used</h4>
                {project.tech.map((th, index) => {
                  return (
                    <div className="text-2xl mr-3" key={index}>
                      {th}
                    </div>
                  );
                })}
              </div>
              <div>
                <h4 className="mb-1">Links</h4>
                <div className="flex space-x-3">
                  <FaGithub
                    className={` logo-effect ${
                      project.githubUrl
                        ? "link_exist secondary-color"
                        : "link_not_exist"
                    }`}
                  />
                  <CgWebsite
                    className={` logo-effect ${
                      project.githubUrl
                        ? "link_exist secondary-color"
                        : "link_not_exist"
                    }`}
                  />
                </div>
              </div>
            </div>
            <p className="md:max-w-[350px] lg:max-w-[400px]">
              {project.details}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleProject;
