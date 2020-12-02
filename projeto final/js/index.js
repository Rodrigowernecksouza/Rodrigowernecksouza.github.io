var myQuestions = [
	{
		question: "1- O Brasil enfrenta diversos problemas ambientais que prejudicam as diferentes espécies que aqui vivem. De acordo com o IBGE, três problemas ambientais são os mais relatados no Brasil. Marque a alternativa que indica esses problemas:",
		answers: {
			a: 'a)Poluição do solo, poluição atmosférica e contaminação por metais pesados.',
			b: 'b)Assoreamento, desmatamento e queimadas.',
			c:  'c)Poluição atmosférica, queimadas e caça.',
			d:  ' d)Contaminação por metais pesados, desmatamento e caça.'
		},
		correctAnswer: 'b'
	},
	{
		question: "2- Um dos principais problemas ambientais que acontecem no Brasil são decorrentes do acúmulo de sedimentos nos ambientes aquáticos, desencadeando obstrução dos fluxos de água e destruição desses habitats. Esse problema é conhecido como:",
		answers: {
			a: 'a) Desertificação',
			b: 'b) Poluição marinha',
			c: 'c) Assoreamento',
			d: 'd) Desmatamento'
		},
		correctAnswer: 'c'
	},
	{
		question: "3-As queimadas são um problema ambiental grave enfrentado em nosso país. Analise as alternativas e marque aquela que não indica uma consequência das queimadas:",
		answers: {
			a: 'a) Morte dos micro-organismos que vivem no solo.',
			b: 'b) Aumento da poluição atmosférica.',
			c: 'c) Diminuição dos nutrientes do solo',
			d: 'd) Redução do aquecimento global'
		},
		correctAnswer: 'd'
	},
{
		question: "4- O desmatamento é, sem dúvidas, uma das maiores preocupações atuais da humanidade, pois o seu avanço poderá intensificar o processo de remoção da cobertura vegetal do planeta. Podemos identificar como consequências do desmatamento todas as alternativas a seguir, exceto:",
		answers: {
			a: 'a) o aumento do efeito estufa',
			b: 'b) a diminuição da biodiversidade',
			c:  'c) a elevação desproporcional da umidade',
			d:  'd) o maior desgaste do solo'
		},
		correctAnswer: 'c'
	},
	{
		question: "5- Os animais da Amazônia estão sofrendo com o desmatamento e com as queimadas, provocados pela ação humana. A derrubada das árvores pode fazer com que a fina camada de matéria orgânica em decomposição (húmus) seja lavada pelas águas das constantes chuvas que caem na região. O contido no texto justifica-se, uma vez que:",
	answers: {
			a: 'a) a reciclagem da matéria orgânica no solo amazônico é muito lenta e necessita do sombreamento da floresta para ocorrer.',
			b: 'b) o solo da Amazônia é pobre, sendo que a maior parte dos nutrientes que sustenta a floresta é trazida pela água da chuva.',
			c:  'c) as queimadas, além de destruírem os animais e as plantas, destroem, também, a fertilidade do solo amazônico, originalmente rico em nutrientes e minerais.',
			d:  ' d)  o que torna o solo da Amazônia fértil é a decomposição da matéria orgânica proveniente da própria floresta, feita por muitos decompositores existentes no solo.'
		},
		correctAnswer: 'd'
	},

{
		question: "6-A Amazônia é considerada uma floresta tropical. Entre as suas principais características, podemos destacar:",
	answers: {
			a: 'a) Clima quente e úmido / elevada precipitação / vegetação arbórea',
			b: 'b) Clima quente e úmido / baixa precipitação / vegetação arbustiva',
			c:  'c)  Clima frio e úmido / elevada precipitação / vegetação gramínea',
			d:  ' d) Clima quente e seco / elevada precipitação / vegetação rasteira'
		},
		correctAnswer: 'a'
	},

];

var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');

generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);

function generateQuiz(questions, quizContainer, resultsContainer, submitButton){

	function showQuestions(questions, quizContainer){
		
		var output = [];
		var answers; 

		
		for(var i=0; i<questions.length; i++){
			
			
			answers = [];

			
			for(letter in questions[i].answers){

				
				answers.push(
					'<label>'
						+ '<input type="radio" name="question'+i+'" value="'+letter+'">'
					
						+ questions[i].answers[letter]
					+ '</label>'
				);
			}

			
			output.push(
				'<div class="question">' + questions[i].question + '</div>'
				+ '<div class="answers">' + answers.join('') + '</div>'
			);
		}

		
		quizContainer.innerHTML = output.join('');
	}


	function showResults(questions, quizContainer, resultsContainer){
			
		
		var answerContainers = quizContainer.querySelectorAll('.answers');
		
		
		var userAnswer = '';
		var numCorrect = 0;
		
		
		for(var i=0; i<questions.length; i++){

			
			userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
			
			
			
			if(userAnswer===questions[i].correctAnswer){
				
				numCorrect++;
				
				
				answerContainers[i].style.color = 'lightgreen';
			}
			
			else{
				
				answerContainers[i].style.color = 'red';
			}
		}

			
			resultsContainer.innerHTML = numCorrect + ' de ' + questions.length;
		}

	
	showQuestions(questions, quizContainer);

	
	submitButton.onclick = function(){
		showResults(questions, quizContainer, resultsContainer);
	}
}
