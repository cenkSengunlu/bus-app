import DefineVoyageForm from "../components/forms/DefineVoyageForm";
import { GetServerSideProps } from "next/types";
import axios from "../configs/axiosConfig";
import { VoyagesType } from "../app/typings";

export const getServerSideProps: GetServerSideProps = async (context) => {
  // const token = context.req.cookies.token;
  return await axios
    .get("voyage", {
      withCredentials: true,
    })
    .then((res) => {
      return {
        props: {
          voyage: res.data,
          error: null,
        },
      };
    })
    .catch((err) => {
      return {
        props: {
          voyage: [],
          error: "hata",
        },
      };
    });
};

const defineVoyage = ({
  voyage,
  error,
}: {
  voyage: VoyagesType;
  error: string;
}) => {
  console.log(voyage);
  return (
    <DefineVoyageForm
      buses={voyage.bus}
      province={voyage.province}
      voyage={voyage.voyage}
    />
  );
};

export default defineVoyage;
