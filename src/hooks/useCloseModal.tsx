import { useEffect } from "react";
import { useAppDispatch } from "../lib/redux/hooks";

type actionReducer = {
  payload: boolean | undefined;
  type: "ticket/onToggleTicketModal";
};

export function useCloseModal(
  ref: React.RefObject<HTMLDivElement | null>,
  actionReducer: actionReducer,
  isTicketModalOpen: boolean
) {
  const dispatch = useAppDispatch();

  useEffect(() => {
    function onBlurModal(e: MouseEvent) {
      const target = e.target as HTMLElement;

      //   the ref belongs to the modal
      if (ref.current && !ref.current.contains(target)) {
        dispatch(actionReducer);
      }
    }

    if (isTicketModalOpen) {
      document.addEventListener("mousedown", onBlurModal);
    }

    return () => document.removeEventListener("mousedown", onBlurModal);
  }, [dispatch, actionReducer, isTicketModalOpen, ref]);
}
