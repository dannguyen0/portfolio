/* ══════════════════════════════════════════════════════════════
   PROJECTS.JS  —  Edit this file to update your portfolio.

   To ADD a project:  copy one block ({ ... },) and paste it
   To REMOVE:         delete the whole block including the { }
   To REORDER:        cut a block and paste it where you want it
   Leave "link" as "" if you don't have a URL yet.
   Tags: keep them short — "Python", "SQL", "Tableau", etc.
   Icon options: movie | chart | food | store | music | scatter | globe | plane
═══════════════════════════════════════════════════════════════ */

const PROJECTS = [
  {
    "title": "Analysis on the Movie Industry",
    "description": "Exploratory data analysis examining whether films have improved over time in terms of ratings, genre trends, and box office performance.",
    "tags": ["Python", "EDA", "Pandas"],
    "icon": "movie",
    "link": "https://github.com/dannguyen0/movie_industry_analysis/blob/main/movie_industry_analysis.ipynb"
  },
  {
    "title": "Movie Industry Tableau Reports",
    "description": "Interactive Tableau dashboard companion to the movie industry EDA, visualizing genre trends and rating distributions across decades.",
    "tags": ["Tableau", "Visualization"],
    "icon": "chart",
    "link": "https://public.tableau.com/views/MovieIndustry_16651259228630/Dashboard1?:language=en-US&:display_count=n&:origin=viz_share_link"
  },
  {
    "title": "Analysis on the Michelin Guide",
    "description": "Exploratory analysis investigating what factors correlate with Michelin star ratings across restaurants worldwide.",
    "tags": ["Python", "EDA"],
    "icon": "food",
    "link": "https://github.com/dannguyen0/michelin-guide/blob/main/Michelin%20Notebook.ipynb"
  },
  {
    "title": "Maven Market Power BI Dashboard",
    "description": "Sales and revenue analysis dashboard for a fictional grocery chain, built in Power BI with interactive filters and KPI tracking.",
    "tags": ["Power BI", "Dashboard"],
    "icon": "store",
    "link": "https://docs.google.com/presentation/d/1Vh3TT9k7GkRY6yLJJiKFsRJ-Pn-XuNgD/edit?usp=sharing"
  },
  {
    "title": "Spotify Data Cleaning",
    "description": "Python-based data processing pipeline for cleaning and standardizing a dataset of historical Spotify tracks.",
    "tags": ["Python", "Data Cleaning"],
    "icon": "music",
    "link": "https://github.com/dannguyen0/spotify-data-cleaning/blob/main/Spotify%20Data%20Cleaning.ipynb"
  },
  {
    "title": "Spotify Data Dashboard",
    "description": "Power BI dashboard exploring the drivers of song popularity using the cleaned Spotify dataset.",
    "tags": ["Power BI", "Visualization"],
    "icon": "music",
    "link": "https://docs.google.com/presentation/d/1125kiNvgdXsnwkcw0UDBRfVqdq2c3PBj/edit?usp=sharing"
  },
  {
    "title": "Movie Industry Part 2",
    "description": "Follow-up statistical correlation analysis on the movie industry dataset using Python, testing hypotheses from the original EDA.",
    "tags": ["Python", "Statistics"],
    "icon": "scatter",
    "link": "https://github.com/dannguyen0/movie_industry_analysis/blob/main/Movie%20Data.ipynb"
  },
  {
    "title": "World Population Data Cleaning",
    "description": "Data cleaning and normalization exercise on world population datasets, with Seaborn visualizations to surface demographic trends.",
    "tags": ["Python", "Data Cleaning", "Seaborn"],
    "icon": "globe",
    "link": "https://github.com/dannguyen0/world_population"
  },
  {
    "title": "Airline Satisfaction Analysis",
    "description": "Exploratory analysis of passenger satisfaction factors using survey data, examining how service quality dimensions affect overall experience ratings.",
    "tags": ["Python", "EDA"],
    "icon": "plane",
    "link": "https://github.com/dannguyen0/airline_cleaning/blob/main/satisfaction_cleaning.ipynb"
  }
];
