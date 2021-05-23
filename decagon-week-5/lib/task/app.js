"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var taskOne = function (passengers, shuffle) {
    var entered = [];
    var reservation = [];
    var boarded = [];
    var count = 0;
    var route = ["Abuja", "Benue", "Lagos", "Katsina", "Sambisa"];
    var locationCount = 0;
    for (var passenger = 1; passenger <= passengers; passenger++) {
        entered.push({
            name: "Passenger" + passenger,
            location: "" + route[locationCount]
        });
        if (locationCount === 4) {
            locationCount = 0;
        }
        else {
            locationCount++;
        }
    }
    if (entered.length < 5) {
        reservation = entered;
    }
    if (entered.length <= 50 && entered.length >= 5) {
        if (entered.length % 5 == 0) {
            boarded = __spreadArrays(entered);
            count++;
        }
        else {
            boarded = entered.splice(0, entered.length - entered.length % 5);
            reservation = entered;
            count++;
        }
    }
    else if (entered.length > 50) {
        boarded = entered.splice(0, 50);
        reservation = entered;
        count++;
        while (shuffle > 0 && entered.length >= 5) {
            if (entered.length > 50) {
                boarded = entered.splice(0, 50);
            }
            else {
                if (entered.length % 5 == 0) {
                    boarded = entered.splice(0);
                    reservation = [];
                }
                else {
                    boarded = entered.splice(0, entered.length - entered.length % 5);
                    boarded;
                    reservation = entered;
                }
            }
            count++;
            shuffle--;
        }
    }
    return {
        boarded: boarded,
        reservation: reservation,
        count: count
    };
};
exports.default = taskOne;
