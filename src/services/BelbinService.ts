import {keys, roles} from "@/consts/roles";
import $api from "@/http";
import {BelbinRole, BelbinRoleCreate} from "@/models/BelbinRole";

export default class BelbinService {
    static calculateBelbin(questionsRate: { [x: number]: { [x: number]: any; }; }) {
        let updatedRoles: any = {...roles};
        for(const role in updatedRoles) {
            updatedRoles[role] = keys[role].reduce((acc: any, val: any) => {
                const pageId = val[0];
                const questionId = val[1];
                return acc + questionsRate[pageId][questionId];
            }, 0);
        }

        let array = [];
        for( const role in updatedRoles ) {
            array.push(updatedRoles[role]);
        }
        array = array.sort((a, b) => a - b);

        const arrayLength = array.length;

        let topRoles = [];
        for (let i = 0; i < arrayLength; i++) {
            const rate: any = array.pop();
            const category = Object.keys(updatedRoles).filter(function(key) {return updatedRoles[key] === rate});
            for (let j = 0 ; j <= category.length; j++ ) {
                topRoles.push({
                    category: category[j],
                    points: rate
                });
                updatedRoles[category[i]] = -100;
                array = array.filter(el => el !== rate);

            }
        }
        let finalTopRoles: BelbinRoleCreate[] = [];
        for(const role in topRoles) {
            if (topRoles[role].category !== undefined && topRoles[role].points !== undefined ) {
                finalTopRoles.push({
                    name: topRoles[role].category,
                    percent: 0,
                    points: topRoles[role].points
                });
            }
        }
        const sumAllValue = finalTopRoles.reduce((sum: number, role: any) => sum + role.points, 0);
        finalTopRoles = finalTopRoles.map((role: any) => {
            return {
                ...role,
                percent: Math.round(role.points / sumAllValue * 100)
            }
        });
        return finalTopRoles;
    }
    static topRoles(topRoles: BelbinRoleCreate[]) {
        let mainValue: any;
        for(let value in topRoles) {
            if ( topRoles[value].name !== undefined && topRoles[value].points !== undefined && value !== undefined) {
                mainValue = topRoles[value];
                break;
            }
        }
        let supportedValue: any;
        if (mainValue !== undefined) {
            for(let value in topRoles) {
                if ( topRoles[value].name !== undefined && topRoles[value].points !== undefined && value !== undefined && topRoles[value].name !== mainValue.category) {
                    supportedValue = topRoles[value];
                    break;
                }
            }
        }
        let smallest : any;
        for(let value in topRoles) {
            if ( topRoles[value].name !== undefined && topRoles[value].points !== undefined && value !== undefined) {
                smallest = topRoles[value];
            }
        }
        return {
            mainValue,
            supportedValue,
            smallest
        }
    }

    static async fetchBelbin() {
        return $api.get<BelbinRole[]>('/belbin/')
    }
    static async createBelbin(roles: BelbinRoleCreate[]) {
        await $api.delete('/belbin/');
        return $api.post<BelbinRole>('/belbin/', roles)
    }

}


