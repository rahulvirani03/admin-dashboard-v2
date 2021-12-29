import {
  doc,
  getDoc,
  getDocs,
  setDoc,
  deleteDoc,
  getFirestore,
  onSnapshot,
  query,
  where,
  updateDoc,
  collection,
} from "firebase/firestore";
import { app, db } from "@/Firebase/firebase";

export const storeSeller = async (seller) => {
  const res = await setDoc(doc(db, "users", `${seller?.business_name}`), {
    ...seller,
    isSeller: false,
  });
};
export const getSellers = async () => {
  const data = [];
  let id = "";
  const q = query(collection(db, "users"), where("isSeller", "==", true));
  const q1 = query(collection(db, "users"));
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    id = doc.id;
    data.push(doc.data());
  });

  return { id, data };
};

export const getCategories = async () => {
  const data = [];
  let id = "";
  const q = query(collection(db, "categories"));
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    id = doc.id;
    data.push({ ...doc.data(), id });
  });
  return data;
};

export const setFirestoreCategories = async (category) => {
  try {
    const netCategoryRef = doc(collection(db, "categories"));
    const res = await setDoc(netCategoryRef, { name: category });
    if (res) {
      return true;
    }
  } catch (e) {
    return e;
  }
};

export const getSellersWithWhere = async () => {
  let data = [];
  let id = "";
  const q = query(
    collection(db, "seller-request"),
    where("isVerified", "==", false)
  );
  onSnapshot(q,(qs)=>{
    const temp=[];
    qs.forEach((doc)=>{
      temp.push(doc.data());
    })
    data.push(...temp)
  })
  return data;
};

export const getSellerToVerify = async (uid) => {
  let res;
  const q = query(collection(db, "users"), where("uid", "==", uid));
  const result = await getDocs(q);
  result.forEach((item) => {
    res = item.data();
  });

  return res;
};

export const approveUser = async (uid,seller) => {
  let sellerRef = "";
  sellerRef = doc(db, "seller-request", uid);
  const output = await updateDoc(sellerRef, {
    isVerified: true,
  });
  const isSellerRef=doc(db,"users",uid);
  await updateDoc(isSellerRef,{
    isSeller:true,
  })
  const res = await setDoc(doc(db, "sellers", uid), {
    businessName:seller.businessName,
  });
};


export const deleteCategory =async (item)=>{
  try{
    console.log({item});
    const res=await deleteDoc(doc(db,'categories',item.id))
    return res;
  }
  catch(err){
    console.log({err});
  }
    
}