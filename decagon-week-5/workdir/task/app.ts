const taskOne = (passengers: number, shuffle: number) => {

    interface PassengerObj {
        name: string,
        location: string
    }
    let entered = [];
    let reservation: PassengerObj[] = [];
    let boarded: PassengerObj[] = [];
    let count: number = 0;

    const route: string[] = ["Abuja", "Benue", "Lagos", "Katsina", "Sambisa"];

    let locationCount = 0;

    for (let passenger = 1; passenger <= passengers; passenger++) {
        entered.push({
            name: `passenger${passenger}`,
            location: `${route[locationCount]}`
        });
        if (locationCount === 4) {
            locationCount = 0;
        } else {
            locationCount++;
        }
    }
    if (entered.length < 5) {
        reservation = entered;
    }
    if (entered.length <= 50 && entered.length >= 5) {
        if (entered.length % 5 == 0) {
            boarded = [...entered];
            count++
        }
        else {
            boarded = entered.splice(0, entered.length - entered.length % 5);
            reservation = entered;
            count++
        }
    } else if (entered.length > 50) {
        boarded = entered.splice(0, 50);
        reservation = entered;
        count++
        while (shuffle > 0 && entered.length >= 5) {
            if (entered.length > 50) {
                boarded = entered.splice(0, 50);
            } else {
                if (entered.length % 5 == 0) {
                    boarded = entered.splice(0);
                    reservation = [];
                }
                else {
                    boarded = entered.splice(0, entered.length - entered.length % 5);
                    reservation = entered;
                }
            }
            count++
            shuffle--
        }
    }

    return {
        boarded,
        reservation,
        count
    }
}

console.log(taskOne(62, 2))
export default taskOne;