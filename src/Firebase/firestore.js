import {
  doc,
  getDocs,
  setDoc,
  getFirestore,
  query,
  where,
  collection,
} from "firebase/firestore";
import { app } from "@/Firebase/firebase";
const db = getFirestore(app);

const storeSeller = async (seller) => {
  const res = await setDoc(doc(db, "users", `${seller?.business_name}`), {
    ...seller,
    isSeller: false,
  });
};
const getSellers = async () => {
  const data = [];
  let id = "";
  const q = query(collection(db, "users"), where("isSeller", "==", true));
  const q1 = query(collection(db, "users"));
  const querySnapshot = await getDocs(q1);
  querySnapshot.forEach((doc) => {
    id = doc.id;
    data.push(doc.data());
  });
  console.log(data);
  return { id, data };
};

const getCategories = async () => {
  const data = [];
  let id = "";
  const q = query(collection(db, "categories"));
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    id = doc.id;
   console.log(doc.data());
    data.push({...doc.data(),id});
  });
  console.log(data);
  return data;
};

const setFirestoreCategories =async (category) =>{
  try{
    const netCategoryRef = doc(collection(db, "categories"));
    const res = await setDoc(netCategoryRef,
      {"name":category}
   );
   if(res)
   {
     return true
   }
  }
  catch(e)
  {
    return e;
  }
 
}
const getSellersWithWhere = async () => {
  const data = [];
  let id = "";
  const q = query(collection(db, "users"), where("isSeller", "==", false));
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    id = doc.id;
    data.push(doc.data());
  });
  console.log(data);
  return { id, data };
};
export { storeSeller, getSellers, getSellersWithWhere,getCategories ,setFirestoreCategories};
