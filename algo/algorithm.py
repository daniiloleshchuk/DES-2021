import numpy as np
import os


def get_ingredients():
    return [word.replace('\n', '').rstrip() for word in open('./algo/ingredients.txt')]


def get_coefficients():
    return [float(coefficient.replace('\n', '')) for coefficient in open('./algo/coefficients.txt')]


ingredients = get_ingredients()
coefficients = get_coefficients()

coefficients = np.array(coefficients)


def predict_probability(feature_matrix, coefficients: list):
    product = np.dot(feature_matrix, coefficients)
    predictions = 1/(1 + np.exp(-product))
    return predictions


# here data is user's input
def predict_using_ingredients(ingredients: list, coefficients: list, data: str):
    feature_matrix = np.ones(len(ingredients)+1) 
    data = data.split(",")
    for j in range(len(data)):
        data[j] = data[j].strip().lower()
    for i in range(0, len(ingredients)):
        feature_matrix[i+1] = 1 if ingredients[i] in data else 0
    
    probability = predict_probability(feature_matrix, coefficients)
    return "{}% likely to be tasty".format(round(probability * 100, 2))


def predict(data: str):
    return predict_using_ingredients(ingredients, coefficients, data)


# predict_using_ingredients(ingredients, coefficients, data)
