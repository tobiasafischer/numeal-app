from flask import Flask, request, jsonify
from flask_restful import Api, Resource
from flask_cors import CORS
from recipe_scrapers import scrape_me

app = Flask(__name__)
api = Api(app)
cors = CORS(app, resources={r"/comments": {"origins": "*"}})


class RecipeScraper(Resource):
    def get(self):
        url = request.args.get('url')
        if url:
            try:
                recipe_data = scrape_recipe(url)
                return jsonify(recipe_data)
            except Exception as e:
                return jsonify({'error': str(e)}), 500
        else:
            return jsonify({'error': 'Missing URL parameter'}), 400


def scrape_recipe(url):
    scraper = scrape_me(url)
    return scraper.to_json()


api.add_resource(RecipeScraper, '/scrape')

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=5000, debug=True)
