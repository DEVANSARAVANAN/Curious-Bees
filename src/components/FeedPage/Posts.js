// import React from 'react';
// import logo from '../../assets/logo.png';
// import coverImg from '../../assets/cover.png';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faArrowUp, faArrowDown, faArrowUpFromBracket, faComment, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

// const Posts = () => {
//   return (
    
//     <div className='container'>
//       <div className='search my-3 d-flex'>
//         <FontAwesomeIcon icon={faMagnifyingGlass} className='search-icon' />
//         <input type='search' placeholder='Search' className='' />
//       </div>
//       <div className='post row pt-3 ps-3 border shadow rounded my-3'>
//         <div className='col-2'>
//         <img src={logo}  className='img-fluid w-75' />
//         </div>
//         <div className='col-10'>
//           <p className='mt-3'>SRM UNIVERSITY</p>
//           <h6>A Website for helping so and so </h6>
//           <p>An excellent platform for developing and strengthening your brand. It can increase your visibility as an individual, even as it allows you to raise your company's profile.</p>
//           <div className=''>
//             <img src={coverImg}  className='img-fluid rounded shadow' style={{width:'90%'}} />
//           </div>
//           <div className='d-flex justify-content-start my-3 text-primary'>
//             <div className='me-5'><FontAwesomeIcon icon={faArrowUp} /> 6.2k <FontAwesomeIcon icon={faArrowDown} /></div>
//             <div className='me-5'><FontAwesomeIcon icon={faComment} /> 61</div>
//             <div className='me-5'><FontAwesomeIcon icon={faArrowUpFromBracket} /> 81</div>
//           </div>
//           <p>Show this thread</p>
//         </div>
//       </div>
//       <div className='post row pt-3 ps-3 border shadow rounded my-3'>
//         <div className='col-2'>
//         <img src={logo}  className='img-fluid w-75' />
//         </div>
//         <div className='col-10'>
//           <p className='mt-3'>SRM UNIVERSITY</p>
//           <h6>A Website for helping so and so </h6>
//           <p>An excellent platform for developing and strengthening your brand. It can increase your visibility as an individual, even as it allows you to raise your company's profile.</p>
//           <div className=''>
//             <img src={coverImg} className='img-fluid rounded shadow' style={{width:'90%'}} />
//           </div>
//           <div className='d-flex justify-content-start my-3 text-primary'>
//             <div className='me-5'><FontAwesomeIcon icon={faArrowUp} /> 6.2k <FontAwesomeIcon icon={faArrowDown} /></div>
//             <div className='me-5'><FontAwesomeIcon icon={faComment} /> 61</div>
//             <div className='me-5'><FontAwesomeIcon icon={faArrowUpFromBracket} /> 81</div>
//           </div>
//           <p>Show this thread</p>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Posts



// ##########################################simple post page###############################



// import React from 'react';
// import logo from '../../assets/logo.png';
// import coverImg from '../../assets/cover.png';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faArrowUp, faArrowDown, faArrowUpFromBracket, faComment, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

// const Posts = () => {
//   return (
    
//     <div className='container'>
//       <div className='post row pt-3 ps-3 border shadow rounded my-3'>
//         <div className='col-2'>
//         <img src={logo}  className='img-fluid w-75' />
//         </div>
        
//         <div className='col-10'>
//           <p className='mt-3'>SRM UNIVERSITY</p>
//           <h6>A Website for helping so and so </h6>
//           <p>An excellent platform for developing and strengthening your brand. It can increase your visibility as an individual, even as it allows you to raise your company's profile.</p>
//           <div className=''>
//             <img src={coverImg}  className='img-fluid rounded shadow' style={{width:'90%'}} />
//           </div>
//           <div className='d-flex justify-content-start my-3 text-primary'>
//             <div className='me-5'><FontAwesomeIcon icon={faArrowUp} /> 6.2k <FontAwesomeIcon icon={faArrowDown} /></div>
//             <div className='me-5'><FontAwesomeIcon icon={faComment} /> 61</div>
//             <div className='me-5'><FontAwesomeIcon icon={faArrowUpFromBracket} /> 81</div>
//           </div>
//           <p>Show this thread</p>
//         </div>
//       </div>
//       <div className='post row pt-3 ps-3 border shadow rounded my-3'>
//         <div className='col-2'>
//         <img src={logo}  className='img-fluid w-75' />
//         </div>
//         <div className='col-10'>
//           <p className='mt-3'>SRM UNIVERSITY</p>
//           <h6>A Website for helping so and so </h6>
//           <p>An excellent platform for developing and strengthening your brand. It can increase your visibility as an individual, even as it allows you to raise your company's profile.</p>
//           <div className=''>
//             <img src={coverImg} className='img-fluid rounded shadow' style={{width:'90%'}} />
//           </div>
//           <div className='d-flex justify-content-start my-3 text-primary'>
//             <div className='me-5'><FontAwesomeIcon icon={faArrowUp} /> 6.2k <FontAwesomeIcon icon={faArrowDown} /></div>
//             <div className='me-5'><FontAwesomeIcon icon={faComment} /> 61</div>
//             <div className='me-5'><FontAwesomeIcon icon={faArrowUpFromBracket} /> 81</div>
//           </div>
//           <p>Show this thread</p>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Posts





























// src/Posts.js
import React, { useState, useEffect } from 'react';
import logo from '../../assets/logo.png'; // Make sure these paths are correct
import coverImg from '../../assets/cover.png'; // Make sure these paths are correct
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp, faArrowDown, faArrowUpFromBracket, faComment } from '@fortawesome/free-solid-svg-icons';
import { db } from '../GoogleSingin/firebase';
import { collection, getDocs } from 'firebase/firestore';

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const postsCollection = collection(db, 'post');
      const postsSnapshot = await getDocs(postsCollection);
      const postsList = postsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setPosts(postsList);
    };

    fetchPosts();
  }, []);

  return (
    <div className='container'>
      {posts.map((post) => (
        <div key={post.id} className='post row pt-3 ps-3 border shadow rounded my-3'>
          <div className='col-2'>
            <img src={logo} className='img-fluid w-75' alt="Logo" />
          </div>
          <div className='col-10'>
            <h5 className='mt-3'>{post.title}</h5>
            <h6>{post.collaborators}</h6>
            <p>{post.message}</p>
            <div>
              <img src={coverImg} className='img-fluid rounded shadow' style={{width: '90%'}} alt="Cover" />
            </div>
            <div className='d-flex justify-content-start my-3 text-primary'>
              <div className='me-5'><FontAwesomeIcon icon={faArrowUp} /> 6.2k <FontAwesomeIcon icon={faArrowDown} /></div>
              <div className='me-5'><FontAwesomeIcon icon={faComment} /> 61</div>
              <div className='me-5'><FontAwesomeIcon icon={faArrowUpFromBracket} /> 81</div>
            </div>
            <p>Show this thread</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Posts;
