import { FaArrowRight } from "react-icons/fa";
import { IoShareSocialOutline } from "react-icons/io5";
import Footer from '../../../comman/Footer'

export default function CourseHome() {
  return (
    <div>
      <div className="course-home-main">
        <div className="introdution">
          <h4>
            Introducing our brand new certification course with HBS INFOTECH 🎉
          </h4>
        </div>
        <div className="flex bg-gradient-to-b from-gray-950 to-gray-700 w-[95%] h-[300px] rounded-md mx-auto p-4 mt-3">
          <div className="w-1/3">
            <img src="https://img.youtube.com/vi/MytrG5K0gQo/0.jpg" alt="course" className="w-full h-full" />
          </div>
          <div className="w-2/3 p-4">
            <h1 className="text-white text-2xl my-4">AlmaBetter X WOOLF University, Master's Degree</h1>
            <p className="text-white">Introducing a global Master’s Degree Program in collaboration with the Woolf University, Europe along with Advanced Certification from IIT Guwahati</p>
            <div className="flex mt-10">
              <button className="bg-red-500 text-white px-3 py-2 rounded-sm mr-4">Explore Master's Program</button>
              <button className="text-red-500 bg-white px-3 border-2 border-red-500 py-2 rounded-sm mr-4">Talk to Admission Team</button>
              <u className="text-white mt-3">Visit Woolf University</u>
            </div>
          </div>
        </div>
        <div className="flex">
          <div className="bg-white w-2/3 p-4 rounded-md m-4">
            <div>
              <h4 className="font-semibold">Full Stack Data Science Program</h4>

              <div className="">
                <div class="flex gap-2 pb-4 sm:text-sm text-xs">
                  <div class="py-2 flex items-center justify-center rounded-md px-4" style={{ backgroundColor: "rgb(235, 242, 252)" }}>
                    <div class="text-learn-tertiary-shade-1">6 months</div>
                  </div>
                  <div class="py-2 flex items-center justify-center rounded-md px-4" style={{ backgroundColor: "rgb(235, 242, 252)" }}>
                    <div class="text-learn-tertiary-shade-1">6 modules</div>
                  </div>
                </div>
              </div>
              <div class="flex flex-row gap-6 my-2">
                <div class="flex gap-3 items-center">
                  <img src="https://grow.almabetter.com/static/media/bookmark.72dd44bc.svg" alt="" class="md:w-full w-4" />
                  <span class="text-sm">Module</span>
                </div>
                <div class="font-semibold text-sm line-clamp-1">Applied Statistics
                </div>
              </div>
              <div class="flex flex-row gap-6 my-2">
                <div class="flex gap-3 items-center">
                  <img src="https://grow.almabetter.com/static/media/book.c6c05f1a.svg" alt="" class="md:w-full w-4" />
                  <span class="text-sm">Lesson</span>
                </div>
                <div class="font-semibold text-sm line-clamp-1">Calculas fro ML
                </div>
              </div>
            </div>
            <div className="course-home-block2-right-side-inside">


            </div>
            <button className="btn-course-inside">Continue Learning</button>


          </div>
          <div className="w-1/3 p-4 my-4 mr-4 bg-white rounded-md">
            <h5>Our Heros</h5>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6tWkfCJfejkeaq78A0p6L5CZWFFVwxyz0DA&s" alt="" className="mx-auto" />

          </div>

        </div>



        <div className="course-home-block3-top d-flex justify-content-between m-5 font-bold">
          <h3>Practice Coding Assessments</h3>
          <p>see all</p>
        </div>
        <div className="flex gap-4 md:flex-row flex-col mx-4">
          <div className="w-[400px] h-[300px] bg-white rounded-md p-4">
            <img src="https://almablog-media.s3.ap-south-1.amazonaws.com/small_Accenture_Emblem_1deca2b994.png" alt="" className="h-16 w-16 mx-auto"/>
            <h4 className="text-center text-xl mt-4">Accenture coding Problems</h4>
            <p className="text-gray-500 text-center">5 Questions | 75 Min</p>
            <div className="flex justify-between mt-2">
              <button className="text-red-500 bg-white px-3 py-2 rounded-sm mt-4">Start Now <FaArrowRight className="inline"/></button>
              <IoShareSocialOutline className="text-xl bg-red-100 mt-10 rounded-full text-red-500 "/>
            </div>
          </div>
          <div className="w-[400px] h-[300px] bg-white rounded-md p-4">
            <img src="https://almablog-media.s3.ap-south-1.amazonaws.com/small_Dropbox_aaf7db0466.png" alt="" className="h-16 w-16 mx-auto"/>
            <h4 className="text-center text-xl mt-4">Dropbox Python Coding Problems</h4>
            <p className="text-gray-500 text-center">5 Questions | 75 Min</p>
            <div className="flex justify-between mt-2">
              <button className="text-red-500 bg-white px-3 py-2 rounded-sm mt-4">Start Now <FaArrowRight className="inline"/></button>
              <IoShareSocialOutline className="text-xl bg-red-100 mt-10 rounded-full text-red-500 "/>
            </div>
          </div>
          <div className="w-[400px] h-[300px] bg-white rounded-md p-4">
            <img src="https://almablog-media.s3.ap-south-1.amazonaws.com/small_hcl_297d6306b4.png" alt="" className="h-16 w-16 mx-auto"/>
            <h4 className="text-center text-xl mt-4">HCLTech Python Coding Problems</h4>
            <p className="text-gray-500 text-center">5 Questions | 75 Min</p>
            <div className="flex justify-between mt-2">
              <button className="text-red-500 bg-white px-3 py-2 rounded-sm mt-4">Start Now <FaArrowRight className="inline"/></button>
              <IoShareSocialOutline className="text-xl bg-red-100 mt-10 rounded-full text-red-500 "/>
            </div>
          </div>
        </div>

        <div className="course-home-block3-top d-flex justify-content-between m-5 font-bold">
          <h3>Practice Quiz Assessments</h3>
          <p>see all</p>
        </div>
        <div className="flex gap-4 md:flex-row flex-col mx-4">
          <div className="w-[400px] h-[300px] bg-white rounded-md p-4">
            <img src="https://i.fbcd.co/products/original/nn-circle-logo-design-2-26efa390c639dff63af2a65534db7225653faa175519ac6117f9dc8e99518f61.jpg" alt="" className="h-16 w-16 mx-auto"/>
            <h4 className="text-center text-xl mt-4">Neural Networks</h4>
            <div className="flex justify-between mt-2">
              <button className="text-red-500 bg-white px-3 py-2 rounded-sm mt-4">Start Now <FaArrowRight className="inline"/></button>
              <IoShareSocialOutline className="text-xl bg-red-100 mt-10 rounded-full text-red-500 "/>
            </div>
          </div>
          <div className="w-[400px] h-[300px] bg-white rounded-md p-4">
            <img src="https://almablog-media.s3.ap-south-1.amazonaws.com/small_microsoft_5867d21a95.jpg" alt="" className="h-16 w-16 mx-auto"/>
            <h4 className="text-center text-xl mt-4">Microsoft Data Analyst Mock Test</h4>
            <div className="flex justify-between mt-2">
              <button className="text-red-500 bg-white px-3 py-2 rounded-sm mt-4">Start Now <FaArrowRight className="inline"/></button>
              <IoShareSocialOutline className="text-xl bg-red-100 mt-10 rounded-full text-red-500 "/>
            </div>
          </div>
          <div className="w-[400px] h-[300px] bg-white rounded-md p-4">
            <img src="https://almablog-media.s3.ap-south-1.amazonaws.com/small_meta_1_aeb9b71355.png" alt="" className="h-16 w-16 mx-auto"/>
            <h4 className="text-center text-xl mt-4">Meta Data Scientist Mock Test</h4>
            <div className="flex justify-between mt-2">
              <button className="text-red-500 bg-white px-3 py-2 rounded-sm mt-4">Start Now <FaArrowRight className="inline"/></button>
              <IoShareSocialOutline className="text-xl bg-red-100 mt-10 rounded-full text-red-500 "/>
            </div>
          </div>
        </div>

        <div className="course-home-block3-top d-flex justify-content-between m-5
          font-bold
          ">
          <h3>Capstone Projects</h3>
          <p>see all</p>
        </div>

        <div className="flex gap-4 md:flex-row flex-col mx-4">
          <div className="w-[400px] h-[300px] bg-white rounded-md p-4">
            <img src="https://almablog-media.s3.ap-south-1.amazonaws.com/Cardiovascular_Risk_Prediction_0b3dca43ec.png" alt="" className="h-16 w-16 mx-auto"/>
            <h4 className="text-center text-xl mt-4">Cardiovascular Risk Prediction</h4>
            <p className="text-gray-500 text-center">Classification</p>
            <div className="flex justify-between mt-2">
              <button className="text-red-500 bg-white px-3 py-2 rounded-sm mt-4">Start Now <FaArrowRight className="inline"/></button>
              <IoShareSocialOutline className="text-xl bg-red-100 mt-10 rounded-full text-red-500 "/>
            </div>
          </div>
          <div className="w-[400px] h-[300px] bg-white rounded-md p-4">
            <img src="https://almablog-media.s3.ap-south-1.amazonaws.com/Indi_Go_Logo_b6e3eef040.png" alt="" className="h-16 w-16 mx-auto"/>
            <h4 className="text-center text-xl mt-4">IndiGo Airline Passenger Referral Prediction</h4>
            <p className="text-gray-500 text-center">Classification</p>
            <div className="flex justify-between mt-2">
              <button className="text-red-500 bg-white px-3 py-2 rounded-sm mt-4">Start Now <FaArrowRight className="inline"/></button>
              <IoShareSocialOutline className="text-xl bg-red-100 mt-10 rounded-full text-red-500 "/>
            </div>
          </div>
          <div className="w-[400px] h-[300px] bg-white rounded-md p-4">
            <img src="https://almablog-media.s3.ap-south-1.amazonaws.com/Credit_Card_Default_Prediction_848a34b423.png" alt="" className="h-16 w-16 mx-auto"/>
            <h4 className="text-center text-xl mt-4">Credit Card Default Prediction</h4>
            <p className="text-gray-500 text-center">Classification</p>
            <div className="flex justify-between mt-2">
              <button className="text-red-500 bg-white px-3 py-2 rounded-sm mt-4">Start Now <FaArrowRight className="inline"/></button>
              <IoShareSocialOutline className="text-xl bg-red-100 mt-10 rounded-full text-red-500 "/>
            </div>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-4 w-full mt-32">
          <div className="text-center bg-white py-4 rounded-sm flex flex-col w-full borderFull">
            <div className="my-2 flex flex-col items-center justify-center ">
              <div className="relative">
                <img src="https://almablog-media.s3.ap-south-1.amazonaws.com/thumbnail_Rochit_Jain_c0d9004286.png" alt="User Profile" className="rounded-full object-cover" style={{ width: "6rem", height: "6rem" }} />
                <img src="https://grow.almabetter.com/static/media/linkedin.2a78755a.svg" alt="linkedin" className="absolute bottom-1 right-1 w-4 cursor-pointer bg-white" />
              </div>
              <div className="mt-2 font-bold text-lg">Rochit Jain</div>
              <div className="text-blue-c9"> Data Scientist</div>
              <div className="relative h-20 flex items-center justify-center">
                <img src="https://almablog-media.s3.ap-south-1.amazonaws.com/Rochit_Jain_BCG_52d9f3ae3d.png" alt="social" className="bg-white top-0 object-cover w-32" />
              </div>
            </div>
          </div>
          <div className="text-center bg-white py-4 rounded-sm flex flex-col w-full borderFull">
            <div className="my-2 flex flex-col items-center justify-center ">
              <div className="relative">
                <img src="https://almablog-media.s3.ap-south-1.amazonaws.com/thumbnail_Rochit_Jain_c0d9004286.png" alt="User Profile" className="rounded-full object-cover" style={{ width: "6rem", height: "6rem" }} />
                <img src="https://grow.almabetter.com/static/media/linkedin.2a78755a.svg" alt="linkedin" className="absolute bottom-1 right-1 w-4 cursor-pointer bg-white" />
              </div>
              <div className="mt-2 font-bold text-lg">Rochit Jain</div>
              <div className="text-blue-c9"> Data Scientist</div>
              <div className="relative h-20 flex items-center justify-center">
                <img src="https://almablog-media.s3.ap-south-1.amazonaws.com/Rochit_Jain_BCG_52d9f3ae3d.png" alt="social" className="bg-white top-0 object-cover w-32" />
              </div>
            </div>
          </div>
          <div className="text-center bg-white py-4 rounded-sm flex flex-col w-full borderFull ">
            <div className="my-2 flex flex-col items-center justify-center ">
              <div className="relative">
                <img src="https://almablog-media.s3.ap-south-1.amazonaws.com/thumbnail_Rochit_Jain_c0d9004286.png" alt="User Profile" className="rounded-full object-cover" style={{ width: "6rem", height: "6rem" }} />
                <img src="https://grow.almabetter.com/static/media/linkedin.2a78755a.svg" alt="linkedin" className="absolute bottom-1 right-1 w-4 cursor-pointer bg-white" />
              </div>
              <div className="mt-2 font-bold text-lg">Rochit Jain</div>
              <div className="text-blue-c9"> Data Scientist</div>
              <div className="relative h-20 flex items-center justify-center">
                <img src="https://almablog-media.s3.ap-south-1.amazonaws.com/Rochit_Jain_BCG_52d9f3ae3d.png" alt="social" className="bg-white top-0 object-cover w-32" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <button className="bg-white text-red-500 py-2 px-5 border-2 font-semibold border-red-500 my-5">Talk to a Mentor</button>
        </div>
      </div>
      <div className="w-full h-full">
      <Footer></Footer>
      </div>
    </div>

  );
}
