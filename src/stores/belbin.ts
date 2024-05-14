import {create} from 'zustand';
import BelbinService from "@/services/BelbinService";
import {BelbinRole, BelbinRoleCreate} from "@/models/BelbinRole";


type Row = number[];


export interface BelbinStore {
    role: BelbinRole;
    stages: Array<Row>;
    current_stage: number;
    inc_stage: () => void;
    dec_stage: () => void;
    set: (stage: number, row: number, value: number) => void;
    get: () => void;
    create: (roles: BelbinRoleCreate[]) => void;
}


export const useBelbinStore = create<BelbinStore>((set, getState) => ({
    role: {} as BelbinRole,
    stages: [
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
    ],
    current_stage: 0,
    inc_stage: () => set((state => ({current_stage: state.current_stage + 1}))),
    dec_stage: () => set((state => ({current_stage: state.current_stage - 1}))),
    set: (stage: number, row: number, value: number) => {
        let stages = getState().stages
        stages[stage][row] = value
        set({stages: stages})
    },
    get: () => {
        BelbinService.fetch()
            .catch(
                (error) => {
                    console.log(error)
                    set({role: {} as BelbinRole})
                }
            )
            .then(r => {
                set({role: r?.data})
        })
    },
    create: (roles: BelbinRoleCreate[]) => {
        BelbinService.create(roles).then(r => {
            set({role: r.data})
        })
    }
}));