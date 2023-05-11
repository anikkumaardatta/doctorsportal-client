import { useEffect, useState } from "react";

const useAdmin = (email) => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [isAdminLoading, setIsAdminLoading] = useState(true);
  useEffect(() => {
    if (email) {
      fetch(`http://localhost:5000/all_users/admin/${email}`)
        .then((res) => res.json())
        .then((data) => {
          console.log("Admin", data);
          setIsAdmin(data.isAdmin);
          setIsAdminLoading(false)
        });
    }
  }, [email]);
  return[isAdmin, isAdminLoading]
};

export default useAdmin;
