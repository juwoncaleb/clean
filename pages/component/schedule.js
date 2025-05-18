/* First make sure that you have installed the package */

/* If you are using yarn */
// yarn add @calcom/embed-react

/* If you are using npm */
// npm install @calcom/embed-react
  
import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
export default function Schedule() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({"namespace":"schedule-tour"});
      cal("ui", {"hideEventTypeDetails":false,"layout":"month_view"});
    })();
  }, [])
  return <Cal namespace="schedule-tour"
    calLink="omojuwon/schedule-tour"
    style={{width:"100%",height:"50%",overflow:"scroll"}}
    config={{"layout":"month_view"}}
    
    
  />;
};
  