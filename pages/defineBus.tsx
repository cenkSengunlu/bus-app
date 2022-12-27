import DefineBusForm from "../components/forms/DefineBusForm";
import { GetServerSideProps } from "next/types";
import axios from "../configs/axiosConfig";
import { BusDefinitionType } from "../app/typings";

export const getServerSideProps: GetServerSideProps = async (context) => {
  // const token = context.req.cookies.token;
  return await axios
    .get("bus-definition", {
      withCredentials: true,
    })
    .then((res) => {
      return {
        props: {
          definitions: res.data,
          error: null,
        },
      };
    })
    .catch((err) => {
      return {
        props: {
          definitions: [],
          error: "hata",
        },
      };
    });
};

const defineBus = ({
  definitions,
  error,
}: {
  definitions: BusDefinitionType;
  error: string;
}) => {
  return (
    <DefineBusForm
      brands={definitions.Brands}
      types={definitions.Types}
      properties={definitions.Properties}
    />
  );
};

export default defineBus;
