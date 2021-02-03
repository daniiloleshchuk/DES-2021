import numpy as np

#downloading attributes
words = open("ingredients.txt")
ingredients = []
for word in words:
    ingredients.append(word.replace("\n","").rstrip())

#downloading coefficients
coef = open("coefficients.txt")
coefficients = []
for i in coef:
    i = float(i.replace("\n",""))
    coefficients.append(i)
coefficients = np.array(coefficients)


def predict_probability(feature_matrix, coefficients):
    product = np.dot(feature_matrix, coefficients)
    predictions = 1/(1 + np.exp(-product))
    return predictions

# here data is user's input
def predict_using_ingredients(ingredients, coefficients, data):
    feature_matrix = np.ones(len(ingredients)+1) 
    data = data.split(",")
    for j in range(len(data)):
        data[j] = data[j].strip()
    for i in range(0,len(ingredients)):  
        feature_matrix[i+1] = 1 if ingredients[i] in data else 0
    
    probability = predict_probability(feature_matrix, coefficients)
    return ("{}% likely to be tasty".format(round(probability*100,2)))


predict_using_ingredients(ingredients, coefficients, data)