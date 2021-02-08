# Innovative-Visualization-Design-D3
unique visualization that goes beyond the "common chart types" to showcase the Burritos in SanDiego Dataset


Live firebase deployement of the project: https://innovative-vis-burritos-in-sd.web.app/


* Burritos in San Diego ([source](https://www.kaggle.com/srcole/burritos-in-san-diego)): This dataset contains a single table that lists several ratings of ~200 burritos from ~50 restaurants in San Diego.

I have choosen the Burritos in San Diego Dataset, the dataset was large.
Attributes Choosen:

Quantitaive: Temperature, Wrap, Synergy, Hunger, Uniformity
Categorical: Burrito Type

I have choosen the Burrito type as my Categorical type annd choose 6 types of Burritos that are majorly available accross most of the stores in the Dataset, I have visualised the dataset as a modificaltion of Radial Dataset, with centre in circle depicting the google rating and color depicting the burrito type, the hue determines the overall score.
The quantitaitve are plotted as radial bar graph which are scores  between 0-5.


Navigate to the project folder and run the following commands:

pip install simple-http-server

python -m SimpleHTTPServer 8080
