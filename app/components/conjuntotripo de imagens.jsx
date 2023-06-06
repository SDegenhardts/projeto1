'use client'

// import React, { useState } from 'react';
// import { useServerInsertedHTML } from 'next/navigation';
// import { ServerStyleSheet, StyleSheetManager } from 'styled-components';
 
// export default function StyledComponentsRegistry({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   const [styledComponentsStyleSheet] = useState(() => new ServerStyleSheet());
 
//   useServerInsertedHTML(() => {
//     const styles = styledComponentsStyleSheet.getStyleElement();
//     styledComponentsStyleSheet.instance.clearTag();
//     return <>{styles}</>;
//   });
 
//   if (typeof window !== 'undefined') return <>{children}</>;
 
//   return (
//     <StyleSheetManager sheet={styledComponentsStyleSheet.instance}>
//       {children}
//     </StyleSheetManager>
//   );
// }

// export default function Conjima(){
//     return(
//         <section>
//             <div><img src="perfume1.jpg"/></div>
//             <div><img src="perfume2.jpg"/></div>
//             <div><img src="perfume3.jpg"/></div>
//         </section>
//     )
// }