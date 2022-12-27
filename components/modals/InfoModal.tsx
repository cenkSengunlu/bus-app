import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import InfoModalRow from "../InfoModalRow";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import {
  getTicketInfo,
  selectTicketInfo,
} from "../../slices/ticket/ticketSlice";
import { TicketInfoType } from "../../app/typings";
import { deleteVoyage } from "../../slices/voyage/voyageSlice";

export default function InfoModal({
  open,
  setOpen,
  title,
  voyageItem,
}: {
  open: boolean;
  setOpen: any;
  title: string;
  voyageItem: any;
}) {
  const dispatch = useAppDispatch();
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));
  const [ticketState, setTicketState] = useState<any>(null);
  const ticketInfo = useAppSelector(selectTicketInfo);

  useEffect(() => {
    if (ticketInfo === null) return;
    const test = ticketInfo.voyage.find(
      (ticket: any) => ticket.id === voyageItem.id
    );
    setTicketState(test);
  }, [ticketInfo]);

  useEffect(() => {
    dispatch(getTicketInfo());
  }, []);

  const handleDelete = () => {
    dispatch(deleteVoyage({ voyageId: voyageItem.id }));
    setOpen(false);
  };

  const voyageDate = new Date(voyageItem.date);

  return (
    <div>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby={title}
      >
        <DialogTitle id={title} className="text-3xl mb-3">
          Sefer Bilgisi
        </DialogTitle>
        <DialogContent className="w-96 space-y-2">
          <InfoModalRow
            title={"Sefer Tarihi: "}
            value={`${String(voyageDate.getDate()).padStart(2, "0")}.${String(
              voyageDate.getMonth()
            ).padStart(2, "0")}.${String(voyageDate.getFullYear()).padStart(
              2,
              "0"
            )}`}
          />
          <InfoModalRow title={"Nereden: "} value={voyageItem.from} />
          <InfoModalRow title={"Nereye: "} value={voyageItem.to} />
          <InfoModalRow
            title={"Bilet Ücreti: "}
            value={`${voyageItem.fee} ₺`}
          />
          <InfoModalRow
            title={"Koltuk Sayısı: "}
            value={ticketState?.bus?.number_of_seats}
          />
          <InfoModalRow
            title={"Satılan Koltuk: "}
            value={ticketState?.bus?.seat === null ? 0 : ticketState?.bus?.seat}
          />
          <InfoModalRow
            title={"Toplam Kazanılan:"}
            value={`${String(
              Number(
                ticketState?.bus?.number_of_seats - ticketState?.bus?.seat ===
                  null
                  ? 0
                  : ticketState?.bus?.seat
              ) * voyageItem.fee
            )} ₺`}
          />
          <InfoModalRow
            title={"Boş Koltuk: "}
            value={String(
              Number(ticketState?.bus?.number_of_seats - ticketState?.bus?.seat)
            )}
          />
          <InfoModalRow title={"Sefer Durumu: "} value={"a"} />
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={() => setOpen(false)}>
            İptal
          </Button>
          <Button onClick={() => handleDelete()} autoFocus>
            Seferi Sil
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
