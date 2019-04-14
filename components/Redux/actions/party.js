import { db } from '../../../firebase';

import { JOINED_PARTY, PARTY_NOT_FOUND, ADD_WORDS } from './types';

export const createParty = (user, location) => {
    return dispatch => {
        let { name } = user;
        var party = [{
            name,
            lat: location.lat,
            lng: location.lng,
            isHost: true
        }];

        db.collection('party').add(party)
            .then(() => {
                dispatch({
                    type: JOINED_PARTY,
                    payload: party
                })
            })
            .catch(error => {
                console.log(error.message);
            });
    }
}

export const joinParty = (user, location) => {
    return dispatch => {
        let { name } = user;

        db.collection('party').get()
            .then(snapshot => {
                let docs = snapshot.docs;
                
                if (docs && docs.length) {
                    let parties = [];
                    let partyID;

                    docs.forEach(v => {
                        if (finddistanceance(location.lat, location.lng, docs[v].lat, docs[v].lng) < 2 && v.length <= 4) {
                            parties.push(docs[v]);
                            partyID = v;
                        }
                    });

                    if (party[0]) {
                        let party = party[0];
    
                        party.push({
                            name,
                            lat: location.lat,
                            lng: location.lng,
                            isHost: false
                        });

                        db.collection('party').doc(partyID).set(party)
                            .then(() => {
                                dispatch({
                                    type: JOINED_PARTY,
                                    payload: party
                                });
                            })
                            .catch(error => {
                                console.log(error.message);
                            });
                    } else {
                        dispatch({ type: PARTY_NOT_FOUND });
                    }
                }
            })
            .catch(error => {
                console.log(error.message);
            });
    }
}

export const addWords = words => ({ type: ADD_WORDS, payload: words });

function findDistance(lat1, lng1, lat2, lng2) {
	if ((lat1 == lat2) && (lng1 == lng2)) {
		return 0;
	} else {
		var radlat1 = Math.PI * lat1/180;
		var radlat2 = Math.PI * lat2/180;
		var theta = lng1 - lng2;
		var radtheta = Math.PI * theta/180;
        var distance = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
        
		if (distance > 1) {
			distance = 1;
        }
        
		distance = Math.acos(distance);
		distance = distance * 180/Math.PI;
        distance = distance * 60 * 1.1515;
        
		return distance;
	}
};