import { create } from "zustand"

type Trailer = {
  model: "1" | "2" | "3";
  setModel: (value: "1" | "2" | "3") => void;
  color: string
  setColor: (value: string) => void;
  oversides: "No" | "50cm" | "50+35cm";
  setOversides: (value: "No" | "50cm" | "50+35cm") => void;
  rear: "Normal" | "Oversized";
  setRear: (value: "Normal" | "Oversized") => void;
  bavero: "No" | "Si";
  setBavero: (value: "No" | "Si") => void;
  motor: "Motor_1" | "Motor_2";
  setMotore: (value: "Motor_1" | "Motor_2") => void;
  cover: "No" | "Cover_1" | "Cover_2";
  setCover: (value: "No" | "Cover_1" | "Cover_2") => void;
  suspensions: "No" | "Si";
  setSuspensions: (value: "No" | "Si") => void;
  wheel: "Normal" | "Oversized" | "Stradal";
  setWheel: (value: "Normal" | "Oversized" | "Stradal") => void;
  secondStandFoot: "No" | "Si";
  setSecondStandFoot: (value: "No" | "Si") => void;
  assistedSteering: "No" | "Si";
  setAssistedSteering: (value: "No" | "Si") => void;

  data: any;
  setData: (value: any) => void;
};

export const useTrailer = create<Trailer>((set) => ({
  model: "1",
  setModel: (value) => set(state => ({model: value})),
  color: "1",
  setColor: (value) => set(state => ({ color: value })),
  oversides: "50cm",
  setOversides: (value) => set((state) => ({oversides: value})),
  rear: "Normal",
  setRear: (value) => set((state) => ({rear: value})),
  bavero: "No",
  setBavero: (value) => set((state) => ({bavero: value})),
  motor: "Motor_1",
  setMotore: (value) => set((state) => ({motor: value})),
  cover: "Cover_1",
  setCover: (value) => set((state) => ({cover: value})),
  suspensions: "No",
  setSuspensions: (value) => set((state) => ({suspensions: value})),
  wheel: "Oversized",
  setWheel: (value) => set((state) => ({wheel: value})),
  secondStandFoot: "No",
  setSecondStandFoot: (value) => set((state) => ({secondStandFoot: value})),
  assistedSteering: "No",
  setAssistedSteering: (value) => set((state) => ({assistedSteering: value})),

  data: {},
  setData: (value) => set(state => ({data: value})),
}))