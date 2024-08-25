# Car Analytics

## Project Description

Car Analytics is a web application for market owners, offering detailed insights into various car models and brands. The platform features tables for model and brand comparisons, bar and pie charts for brand distribution, and car cards displaying essential details. Additionally, the highlight page allows users to view and manage their favorited cars.

## Features
 
Website essentially consists of 2 pages, dashboard for general information and comparison about all the cars ,and highlight to view all the highlighted cars.
 
**Dash Board Page**
- **Pie Chart:** Pie Chart for car brands distribution containing car amount and the distribution percentage of respective brands, including an informative legend.
- **Stacked bar chart:** Stacked Bar Chart for car models distribution containing car amount and the distribution percentage of respective models of every brand, including                           an informative legend.
- **Table:** Table showing the total prices (in baht) for each model by brand, along with the number of available cars for each model.
- **Car Cards:** Car Cards displaying essential details such as model, year, price, and location, with respective image. The cards may also be highlighted by clicking the                    heart icon and stored in local storage to be shown in the highlight page.
- **Card Filter:** Filter the car cards by respective brands.
- **Pagination:** Pagination for Car Cards.
 
**Highlight Page**
- **Highlighted Cars Display:** View all the car cards you’ve highlighted orderly in one place, organized similarly to the dashboard but without pagination.
- **Remove from Highlights:** Remove cars from your Highlights by clicking the heart icon.

## Screenshots
- **Main Menu:** This is the main navigation of the project: Dashboard and Highlight.
<div align="center">
    <img src="./screenshots/Main Navigation.png" width="100%"></img>
</div>

- **Visual Display (Pie Chart):** This Pie Chart shows the car brand distribution.
<div align="center">
    <img src="./screenshots/PieChart.png" width="100%"></img>
</div>

- **Visual Display (Stacked Bar Chart):** This Stacked Bar Chart shows the car model distribution by brand.
<div align="center">
    <img src="./screenshots/StackBarChart.png" width="100%"></img>
</div>

- **Car Data Table:** This table shows the car brand, its model, the number of car available and the total value (in baht).
<div align="center">
    <img src="./screenshots/CarDash.png" width="100%"></img>
</div>

- **Car card:** This part displays all the car card with its details. Additionally, it includes fitering for each brand and pagination to view more cars.
<div align="center">
    <img src="./screenshots/CarDisplay.png" width="100%"></img>
</div>

- **Highlight:** This highlight page includes all the car that you have chosen (by clicking heart button).
<div align="center">
    <img src="./screenshots/Highlight.png" width="100%"></img>
</div>

## Project Members
**CSX4107-Web Application Development - Section - 541**

- **[Moe Myint Mo San](https://github.com/MoeMyintMoSan)** <br />
  **Contributed parts**
  - Car Cards
  - Car Highlight
  - Card pagination
  - Highlight Page 
  - Related README.md part: Project Description, Features
- **[Bhone Pyae Kyaw](https://github.com/BhonePyae-Kyaw)**  
  **Contributed parts**
  - Project setup
  - Menu with routing
  - Table for car displays
  - Car filtering by brand for car displays
  - Related README.md part
- **[Kyaw Ye Lwin @ ANMOL](https://github.com/KyawYeLwin)** <br />
  **Contributed parts**
  - Pie chart sorted: Brand Distribution
  - Stacked bar chart: Distribution by Brand
  - Related README.md part: Page Layout Description, Technologies Used


## Getting Started

1. Clone the repository: [`git clone https://github.com/yourusername/wad-p1-car-analytics.git`](https://github.com/BhonePyae-Kyaw/wad-p1-car-analytics.git)
2. Navigate to the project directory: `cd wad-p1-car-analytics`
3. Install dependencies: `pnpm install`
4. Run the application: `npm run dev`
5. Access the app at `http://localhost:5173/project1` or as defined by your terminal in your web browser.

## Technologies Used
- React - JavaScript Library for user interface, used as core framework for this project.
- CSS - Styling language used for layout design and custom component.
- Chart.js - Javascript charting library (via react-chartjs-2) for creating interactive visualization: pie and bar chart.
- React Router - Library for handling navigation and routing within the project.
- Local Storage - Web Storage API used for user's favorite car selections.
- JSON - Data format used for storing and parsing car data.
- React hooks: React feature used for state management and side effect in functional components.

## Credits

This project includes CSS styling from the article [Creating Beautiful HTML Tables with CSS](https://dev.to/dcodeyt/creating-beautiful-html-tables-with-css-428l) by [dcode](https://dev.to/dcodeyt). The CSS has been adapted to fit the needs of this project. Many thanks to dcode for providing such a valuable resource.

 


