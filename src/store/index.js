//import vue from 'vue';
// import vuex from 'vuex';
import { createStore } from "vuex";


const store = createStore({
    state: {
      token: null,
      user: null,
      
      
      
      clients: [
        {
          id: 1,
          name: 'Ronald Mosomi',
          phone_number: '0725029795',
          Address: "P.O BOX 103075-00101 NRB"

        },
        {
          id: 2,
          name: 'William Manoti',
          phone_number: '0725029795',
          Address: "P.O BOX 45-00101 NRB"

        },
      

      ],
      Projects: [
        {
          id: 1,
          name: 'Joska 5 acres',
          price: 5000000,
          plots: [
            {
              id: 1,
              title: "50 by 100 plot for sale in kamulu",
              size: "50x100 feet",
              quoted_price: 2000,
              price_sold: 2500
            },
            {
              id: 2,
              title: "50 by 100 plot for sale in kamulu",
              size: "50x100 feet",
              quoted_price: 2000,
              price_sold: 2500
            }
          ]

        },
        {
          id: 2,
          name: 'Katani 10 acres',
          price: 6000000,
          plots: [
            {
              id: 1,
              title: "50 by 100 plot for sale in katani",
              size: "50x100 feet",
              quoted_price: 2000,
              price_sold: 2500
            },
            {
              id: 2,
              title: "50 by 100 plot for sale in katani",
              size: "50x100 feet",
              quoted_price: 2000,
              price_sold: 2500
            }
          ]

        },
      

      ],
      


    },
    mutations: {
        setUser(state, user) {
          state.user = user;
        },
        setToken(state, token) {
          state.token = token;
        },
        removeToken(state){
            state.token = null
        }, 
        removeUser(state){
            state.user= null
        },
        setClients(state,clients){
          state.clients=clients
        },
        setProjects(state,projects){
          state.projects=projects
        },
        setVehicles(state,vehicles){
          state.vehicles=vehicles
        },
        setTransporters(state,transporters){
          state.transporters=transporters
        },
        setRoutes(state,routes){
          state.routes=routes
        },
        setTrips(state,trips){
          state.trips=trips
        },
        setDeductions(state,deductions){
          state.deductions=deductions
        },
        setRevenues(state,revenues){
          state.revenues=revenues
        },

      },
      actions: {
          clearToken(context){
              context.commit('removeToken')
          },
          clearUser(context){
              context.commit('removeUser')
          },
          addToken(context){
              context.commit('setToken')
          },

          async LoadVehicles(context) {
            const url = `http://localhost:5000/get/vehicles`;
      
            const response = await fetch(url, {
              mode: "cors",
              // credentials: "include",
              headers: {
                "Access-Control-Allow-Origin": true,
              },
            });
            const responseData = await response.json();
            if (!response.ok) {
              //
            }
            const vehicles = [];
            for (const key in responseData) {
              const vehicle = {
                id: key,
                registration: responseData[key].registration,
                description: responseData[key].description,      
                owner: responseData[key].owner,
              };
              vehicles.push(vehicle);
            }
            context.commit("setVehicles", vehicles);
          },
          async LoadTransporters(context) {
            const url = `http://localhost:5000/get/transporters`;
      
            const response = await fetch(url, {
              mode: "cors",
              // credentials: "include",
              headers: {
                "Access-Control-Allow-Origin": true,
              },
            });
            const responseData = await response.json();
            if (!response.ok) {
              //
            }
            const transporters = [];
            for (const key in responseData) {
              const transporter = {
                id_number: key,
                name: responseData[key].name,
                account: responseData[key].account,      
                phone_number: responseData[key].phone_number,
              };
              transporters.push(transporter);
            }
            context.commit("setTransporters", transporters);
          },
          async LoadRoutes(context) {
            const url = `http://localhost:5000/get/routes`;
      
            const response = await fetch(url, {
              mode: "cors",
              // credentials: "include",
              headers: {
                "Access-Control-Allow-Origin": true,
              },
            });
            const responseData = await response.json();
            if (!response.ok) {
              //
            }
            const routes = [];
            for (const key in responseData) {
              const route = {
                id: key,
                name: responseData[key].name,
                distance: responseData[key].distance,      
                rate: responseData[key].rate,
              };
              routes.push(route);
            }
            context.commit("setRoutes", routes);
          },
          async LoadTrips(context) {
            const url = `http://localhost:5000/get/trips`;
      
            const response = await fetch(url, {
              mode: "cors",
              // credentials: "include",
              headers: {
                "Access-Control-Allow-Origin": true,
              },
            });
            const responseData = await response.json();
            if (!response.ok) {
              //
            }
            const trips = [];
            for (const key in responseData) {
              const trip = {
                id: key,
                vehicle: responseData[key].vehicle,
                route: responseData[key].route,      
                weight: responseData[key].weight,
                date: responseData[key].date
              };
              trips.push(trip);
            }
            context.commit("setTrips", trips);
          },
          async LoadDeductions(context) {
            const url = `http://localhost:5000/get/deductions`;
      
            const response = await fetch(url, {
              mode: "cors",
              // credentials: "include",
              headers: {
                "Access-Control-Allow-Origin": true,
              },
            });
            const responseData = await response.json();
            if (!response.ok) {
              //
            }
            const deductions = [];
            for (const key in responseData) {
              const deduction = {
                id: key,
                vehicle: responseData[key].vehicle,
                type: responseData[key].type,      
                amount: responseData[key].amount,
                notes: responseData[key].notes,
                date: responseData[key].date
              };
              deductions.push(deduction);
            }
            context.commit("setDeductions", deductions);
          },
          async LoadRevenues(context) {
            const url = `http://localhost:5000/get/revenue`;
      
            const response = await fetch(url, {
              mode: "cors",
              // credentials: "include",
              headers: {
                "Access-Control-Allow-Origin": true,
              },
            });
            const responseData = await response.json();
            if (!response.ok) {
              //
            }
            const revenues = [];
            for (const key in responseData) {
              const revenue = {
                id: key,
                vehicle: responseData[key].vehicle,
                revenue: responseData[key].revenue,      
                
              };
              revenues.push(revenue);
            }
            context.commit("setRevenues", revenues);
          },
          
      },
      getters: {
        isLoggedIn() {
            return !!localStorage.getItem('token'); 
          },
          // vehicles1(state, vehicles){
          //   state.vehicles=vehicles

          // },
          allvehicles: (state) => state.vehicles,
          clients: (state) => state.clients,
          projects: (state) => state.Projects,
          transporters: (state) => state.transporters,
          routes: (state) => state.routes,
          trips: (state) => state.trips,
          deductions: (state) => state.deductions,
          revenues: (state) => state.revenues,
      },
    
    // 
    
   
});
export default store;
