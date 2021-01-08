import React, {Component, useState, useEffect, useContext} from 'react'
import {Button, Grid, Typography, makeStyles, withStyles} from '@material-ui/core'
import firebase from '../../util/Firebase'
import SelectBox from "../form/selectBox";
import Slider_ from "../form/slider";
import "./StartPageC.css"

// eslint-disable-next-line react-hooks/rules-of-hooks
export default class StartPageC extends Component {
	state = {
		questions: [],
		answers: {},
		forms: [],
		result: [],
		range: 0
	}


	componentDidMount() {
		firebase.firestore().collection("question").doc("Template").get()
			.then(doc => {
				this.setState({
					questions: doc.data().question
				})
			})
		console.log("Get questions")
	}

	returnAnswer = (answer, index) => {
		let answers = {...this.state.answers}
		answers[index] = answer
		this.setState({answers: answers})
		console.log(answers)
	}

	returnRange = (range) => {
		let ranges = range
		this.setState({range: ranges})
	}

	questions = () => {
		let forms = this.state.questions.map((el, i) => {
			let response = null
			if (el.type == "select") {
				return <SelectBox key={"profile_" + i} keyMap={el.key} index={i} title={el.question} response={response}
													answers={el.answers}
													returnAnswer={this.returnAnswer} required={el.required}/>
			}
		})
		return forms;
	}

	agree = () => {
		let content = (
			<div>
				<Typography style={{marginTop: "20px"}}> Что ж, вы хотите победы самого популярного, на ваш взгляд, кандидата, а
					значит вам не за что
					переживать. Идите на участок и голосуйте, вы имеете на это полное право.
				</Typography>
			</div>
		)

		return content;
	}

	disagree = () => {

		let lastName = this.state.answers.candidate.split(" ")[1]
		let male = lastName[lastName.length - 1];

		let content = (
			<div className={"content"}>
				<Typography className={"contentText"}>Итак, вы считаете, что {this.state.answers.candidate} имеет
					слишком большую популярность
					и может выиграть уже в первом туре, но вы этого не хотите.</Typography>
				<Typography className={"contentText"}>
					Как сделать так, чтобы вашему нелюбимому кандидату пришлось упорно
					бороться за президентское кресло? Как оттянуть борьбу хотя бы на второй тур?
				</Typography>
				<Typography className={"contentText"}>
					Второй тур президентских выборов будет невероятным прецедентом в истории Кыргызстана! У нас <a
					href="https://kloop.kg/blog/2017/10/26/samara_elections_kg/" target="_blank">украли эту возможность в 2017
					году
				</a>, так давайте добьёмся этого сейчас!
				</Typography>
				<Typography className={"contentText"}>Для этого надо, чтобы ваш нелюбимый кандидат набрал меньше 50% голосов.
					Как этого добиться?
					Достаточно, чтобы за остальных кандидатов или против всех проголосовало больше половины
					избирателей.
				</Typography>
				<Typography className={"contentText"}>
					<b>
						ВАЖНО!
					</b> При этом надо обязательно пойти на участок и проголосовать!</Typography>
				<Typography className={"contentText"}>
					<b>
						Закон о выборах президента Кыргызской Республики и депутатов Жогорку
						Кенеша Кыргызской Республики, статья 55, пункт 3:
					</b> «Избранным считается кандидат на должность Президента, набравший в первом туре голосования свыше половины
					голосов всех избирателей, <b>
					принявших участие в выборах
				</b>».
				</Typography>
				<Slider_ returnRange={this.returnRange} candidate={this.state.answers.candidate}/>
				<div className={"resultContainer"}>
					<p>
						Вот сколько человек проголосуют при такой явке:
					</p>
					<span>
						{Math.ceil(3544403 * this.state.range / 100)}
					</span>
				</div>
				<div className={"resultContainer"}>
					<p>
						Сколько нужно голосов за других кандидатов,
						чтобы {this.state.answers.candidate} не {(male == "а") ? "выиграла" : "выиграл"} в первом туре:
					</p>
					<span>
						{Math.ceil((Math.ceil(3544403 * this.state.range / 100)) / 2 + 1)}
					</span>
				</div>
			</div>
		)

		return content

	}


	render() {
		let d = '';
		if (this.state.answers.candidate != undefined && this.state.answers.agree != undefined){
			d = (this.state.answers.agree == "Да") ? this.agree() :
			(this.state.answers.agree == "Нет") ? this.disagree() :
				<div></div>
		}


		return (
			<div>
				{this.questions()}
				{d}
			</div>
		)
	}
}
