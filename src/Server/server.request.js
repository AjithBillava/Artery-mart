import { useEffect, useState } from "react";
import axios from "axios";

export const useAxios = () => {
        const [prodData, setProd] = useState(null);
      
        useEffect(() => {
          setTimeout(() => {
            axios
              .get("https://artery-mart-backend.herokuapp.com/products")
              .then((response) => {
                setProd(response.data.products);
                // console.log(response.data);
              })
            .catch(function(error) {
              console.log(error);
            });
          }, 1000);
        }, []);
        return prodData;

    }