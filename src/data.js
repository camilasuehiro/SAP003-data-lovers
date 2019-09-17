export const accidentGrouping = (data, filteredYear) =>
  data.filter(item => filteredYear ? (new Date(item.Year).getFullYear()) == filteredYear : true)
    .map(item => {
      return {
        year: new Date(item.Year).getFullYear(),
        airplane: item.Total_Injured_Persons_General_Aviation + item.Total_Injured_Persons_On_Demand_Air_Taxi + item.Total_Injured_Persons_US_Air_Carrier,
        boat: item.Total_Injured_Persons_Freight_Vessel + item.Total_Injured_Persons_Passenger_Vessel + item.Total_Injured_Persons_Recreational_Boating,
        auto: item.Total_Injured_Persons_Bus_Occupants + item.Total_Injured_Persons_Commuter_Carrier + item.Total_Injured_Persons_Employee_Or_Worker + item.Total_Injured_Persons_Passenger_Car_Occupants + item.Total_Injured_Persons_Truck_Occupants_Large + item.Total_Injured_Persons_Truck_Occupants_Light,
        motorcycle: item.Total_Injured_Persons_Motorcyclists,
        bicycle: item.Total_Injured_Persons_Pedalcyclists,
      };
    });

window.filterData = {
  accidentGrouping: accidentGrouping,
};

window.sortData = {
};

window.computeStats = {
};