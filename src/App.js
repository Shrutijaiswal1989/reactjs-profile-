// // import React, { useState, useEffect } from 'react';
// // import { Formik, Form, Field } from 'formik';
// // import './ProfilePage.css'; 

// // const ProfilePage = () => {
// //   const [user, setUser] = useState({
// //     name: '',
// //     email: '',
// //     avatar: 'https://static.vecteezy.com/system/resources/previews/014/194/216/original/avatar-icon-human-a-person-s-badge-social-media-profile-symbol-the-symbol-of-a-person-vector.jpg',
// //   });

// //   const [error, setError] = useState(null);

// //   useEffect(() => {
// //     setTimeout(() => {
// //       try {
// //         setUser({
// //           name: 'Shruti Kumari Jaiswal',
// //           email: 'shrutijaiswal@gmail.com',
// //           avatar: 'https://static.vecteezy.com/system/resources/previews/014/194/216/original/avatar-icon-human-a-person-s-badge-social-media-profile-symbol-the-symbol-of-a-person-vector.jpg',
// //         });
// //       } catch (e) {
// //         setError('Failed to fetch user data.');
// //       }
// //     }, 1000);
// //   }, []);

// //   const handleSubmit = (values, { setSubmitting }) => {
// //     setUser({
// //       ...user,
// //       name: values.name,
// //       email: values.email,
// //     });
// //     setSubmitting(false);
// //   };

// //   if (error) return <div className="error">{error}</div>; 
// //   if (!user) return <div>Loading...</div>; 

// //   return (
// //     <div className="profile-page">
// //       <h1>Profile Page</h1>
// //       <div className="profile-info">
// //         {/* Avatar Section */}
// //         <div className="avatar">
// //           {user.avatar ? (
// //             <img src={user.avatar} alt="Avatar" />
// //           ) : (
// //             <div className="avatar-placeholder">
// //               {user.name ? user.name[0] : 'A'}
// //             </div>
// //           )}
// //         </div>

// //         <h2>{user.name || 'Your Name'}</h2>
// //         <p>{user.email || 'Your Email'}</p>

// //         {/* Form to update user information */}
// //         <Formik
// //           initialValues={{ name: user.name, email: user.email }}
// //           enableReinitialize 
// //           onSubmit={handleSubmit}
// //         >
// //           {({ isSubmitting }) => (
// //             <Form>
// //               <div className="form-field">
// //                 <label htmlFor="name">Name</label>
// //                 <Field id="name" name="name" placeholder="Enter your name" />
// //               </div>
// //               <div className="form-field">
// //                 <label htmlFor="email">Email</label>
// //                 <Field
// //                   id="email"
// //                   name="email"
// //                   placeholder="Enter your email"
// //                   type="email"
// //                 />
// //               </div>
// //               <button type="submit" disabled={isSubmitting}>
// //                 Update
// //               </button>
// //             </Form>
// //           )}
// //         </Formik>
// //       </div>
// //     </div>
// //   );
// // };

// // export default ProfilePage;


// import React, { useState, useEffect } from 'react';
// import { Formik, Form, Field } from 'formik';
// import './ProfilePage.css';
// const ProfilePage = () => {
// const [user, setUser] = useState({
// name: '',
// email: '',
// avatar: 'https://png.pngtree.com/png-clipart/20200224/original/pngtree-cartoon-color-simplemale-avatar-png-image_5230557.jpg',
// });
// const [error, setError] = useState(null);
// useEffect(() => {
// setTimeout(() => {
// try {
// setUser({
// name: 'Shiv Kumar Gupta',
// email: 'shivgupta@gmail.com',
// avatar: 'https://png.pngtree.com/png-clipart/20200224/original/pngtree-cartoon-color-simplemale-avatar-png-image_5230557.jpg',
// });
// } catch (e) {
// setError('Failed to fetch user data.');
// }
// }, 1000);
// }, []);
// const handleSubmit = (values, { setSubmitting }) => {
// setUser({
// ...user,
// name: values.name,
// email: values.email,
// });
// setSubmitting(false);
// };
// if (error) return <div className="error">{error}</div>; // Display error message
// if (!user) return <div>Loading...</div>; // Display loading state
// return (
// <div className="profile-page">
// <h1>Profile Page</h1>
// <div className="profile-info">
// {/* Avatar Section */}
// <div className="avatar">
// {user.avatar ? (
// <img src={user.avatar} alt="Avatar" />
// ) : (
// <div className="avatar-placeholder">
// {user.name ? user.name[0] : 'A'}
// </div>
// )}
// </div>
// <h2>{user.name || 'Your Name'}</h2>
// <p>{user.email || 'Your Email'}</p>
// {/* Form to update user information */}
// <Formik
// initialValues={{ name: user.name, email: user.email }}
// enableReinitialize // Ensures form fields update with new user data
// onSubmit={handleSubmit}
// >
// {({ isSubmitting }) => (
// <Form>
// <div className="form-field">
// <label htmlFor="name">Name</label>
// <Field id="name" name="name" placeholder="Enter your name" />
// </div>
// <div className="form-field">
// <label htmlFor="email">Email</label>
// <Field
// id="email"
// name="email"
// placeholder="Enter your email"
// type="email"
// />
// </div>
// <button type="submit" disabled={isSubmitting}>
// Update
// </button>
// </Form>
// )}
// </Formik>
// </div>
// </div>
// );
// };
// export default ProfilePage;

import React, { useState, useEffect } from 'react';
import { Formik, Form, Field } from 'formik';
import './ProfilePage.css';
const ProfilePage = () => {
const [user, setUser] = useState({
name: '',
email: '',
avatar: 'data:image/jpeg;base64,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',
});
const [error, setError] = useState(null);
useEffect(() => {
setTimeout(() => {
try {
setUser({
name: 'Shiv Kumar Gupta',
email: 'shivgupta@gmail.com',
avatar: 'data:image/jpeg;base64,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',
});
} catch (e) {
setError('Failed to fetch user data.');
}
}, 1000);
}, []);
const handleSubmit = (values, { setSubmitting }) => {
setUser({
...user,
name: values.name,
email: values.email,
});
setSubmitting(false);
};
if (error) return <div className="error">{error}</div>; // Display error message
if (!user) return <div>Loading...</div>; // Display loading state
return (
<div className="profile-page">
<h1>Profile Page</h1>
<div className="profile-info">
{/* Avatar Section */}
<div className="avatar">
{user.avatar ? (
<img src={user.avatar} alt="Avatar" />
) : (
<div className="avatar-placeholder">
{user.name ? user.name[0] : 'A'}
</div>
)}
</div>
<h2>{user.name || 'Your Name'}</h2>
<p>{user.email || 'Your Email'}</p>
{/* Form to update user information */}
<Formik
initialValues={{ name: user.name, email: user.email }}
enableReinitialize // Ensures form fields update with new user data
onSubmit={handleSubmit}
>
{({ isSubmitting }) => (
<Form>
<div className="form-field">
<label htmlFor="name">Name</label>
<Field id="name" name="name" placeholder="Enter your name" />
</div>
<div className="form-field">
<label htmlFor="email">Email</label>
<Field
id="email"
name="email"
placeholder="Enter your email"
type="email"
/>
</div>
<button type="submit" disabled={isSubmitting}>
Update
</button>
</Form>
)}
</Formik>
</div>
</div>
);
};
export default ProfilePage;