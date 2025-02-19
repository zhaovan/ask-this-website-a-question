// import React from "react";

// export default function index() {
//   return (
//     <motion.div
//       className={styles.textContainer}
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 0.75 }}
//     >
//       <div className={styles.questionContainer}>
//         <p>Should I </p>
//         <input
//           type="text"
//           onChange={(e) => setQuestion(e.target.value)}
//           onKeyDown={(event) => {
//             if (event.key === "Enter") {
//               setIsAnswering(true);
//             }
//           }}
//           className={styles.input}
//           value={question}
//           placeholder={placeholderText}
//         />
//       </div>
//       <Button onClick={() => setIsAnswering(true)}>Ponder further</Button>
//       <Button
//         onClick={() => {
//           setUserResponse("YYYYYY");
//           setIsAnswering(true);
//           setIsFinished(true);
//         }}
//       >
//         jump to end
//       </Button>
//     </motion.div>
//   );
// }
