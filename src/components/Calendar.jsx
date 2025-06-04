import React from "react";
import Event from './Event'


const Calendar = () => {
  return (
    <div className="Calendar">
        <table>
            <thead>
                <tr>
                    <th></th>
                    <th>Sunday</th>
                    <th>Monday</th>
                    <th>Tuesday</th>
                    <th>Wednesday</th>
                    <th>Thursday</th>
                    <th>Friday</th>
                    <th>Saturday</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className="time">10am</td>
                    <td></td>
                    <Event event="Mountain Hike" color="green" />
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <Event event="Farmers Market" color="blue" />
                    <td></td>
                </tr>
                <tr>
                    <td className="time">11am</td>
                    <Event event="Brunch" color="pink" />
                    <td></td>
                    <Event event="Mercier Orchards" color="green" />
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <Event event="Ziplining" color="blue" />
                </tr>
                <tr>
                    <td className="time">12pm</td>
                    <Event event="Rest & Unpack" color="blue" />
                    <td></td>
                    <td></td>
                    <Event event="Tubing" color="green" />
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td className="time">1pm</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <Event event="Lunch at Brewery" color="pink" />
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td className="time">2pm</td>
                    <td></td>
                    <Event event="Railway Ride" color="blue" />
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td className="time">3pm</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <Event event="Fishing" color="green" />
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td className="time">4pm</td>
                    <td></td>
                    <td></td>
                    <Event event="Biking" color="blue" />
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td className="time">5pm</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <Event event="Wine Tasting" color="pink" />
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td className="time">6pm</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <Event event="Dinner: Chophouse" color="pink" />
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td className="time">7pm</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td className="time">8pm</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <Event event="Stargazing" color="green" />
                </tr>
                <tr>
                    <td className="time">9pm</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td className="time">10pm</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
            </tbody>
        </table>
    </div>
    

    );
};

export default Calendar; //exports in order to import into App.jsx