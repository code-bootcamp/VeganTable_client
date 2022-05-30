import { ChangeEvent, MouseEvent } from "react";

export interface IUpdateUserInput {
  nickname?: string;
  address?: string;
  addressDetail?: string;
  type?: string;
  profilePic?: string;
  certImage?: string;
  certUrl?: string;
}

export interface IPostcode {
  address: string;
}

export interface IMyPageEditUIProps {
  userData: any;
  isOpen: boolean;
  userInputs?: any;
  onClickClose: (event: MouseEvent<HTMLDivElement>) => void;
  onCompleteAddressSearch: (postcode: IPostcode) => void;
}
