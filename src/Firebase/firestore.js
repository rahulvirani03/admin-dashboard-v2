import { doc,getDocs,setDoc,getFirestore,query ,where,collection} from "firebase/firestore"; 
import { app } from '@/Firebase/firebase';
const db=getFirestore(app);


const storeSeller= async (seller) => {
    const res=await setDoc(doc(db,"seller",`${seller?.business_name}`),{
      ...seller,
      isSeller:false
    })
}
const getSellers=async () => {
    const data=[];
    let id=""
const q = query(collection(db, "seller"),where("isSeller", "==", false));
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    id = doc.id;
    data.push(doc.data());
  });
  console.log(data);
  return {id,data}
}
export { storeSeller,getSellers }


