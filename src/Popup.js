'use strict'
import React, { Component } from 'react'
import {
	Animated,
	Modal,
	Image,
	Text,
	TouchableHighlight,
	Dimensions,
	StyleSheet,
	View } from 'react-native'

	class Popup extends Component {
		constructor(props) {
			super(props)
			this.state = {
				modalVisible: false,
			}
		}

		render() {
			let height_style = this.props.height ? {height: this.props.height } : {}
			let width_style = this.props.width ? {width: this.props.width } : {}

			let arrow_style = this.props.height ? {position: 'absolute', top: this.props.height} : {}
			return(
				<Modal
					transparent={true}
					visible={this.state.modalVisible}
					onRequestClose={this.close_modal.bind(this)}>

					<View style={{flex: 1}}>
						<TouchableHighlight
							style={styles.overlay}
							underlayColor='rgba(0,0,0,0.4)'
							onPress={this.close_modal.bind(this)}>
							<View/>
						</TouchableHighlight>

						<View style={[
							{
								position:'absolute',
								top: this.props.top || 0,
								left: this.props.left || 0,
								backgroundColor: 'transparent',
							},
							height_style, width_style]} >

								{this.props.arrowDirection === "up"?
									(<View style={[
										styles.triangle, {
											borderBottomColor: this.props.arrowColor || 'white',

											marginLeft:this.props.arrowOffset || 0, } ] } />) : (<View/>)}

											<View>
												{this.props.children}
											</View>

									{(this.props.arrowDirection === "down") ?
										(<View style={[
											styles.triangleDown,
											arrow_style,
											 {
												marginLeft:this.props.arrowOffset || 0,
												borderTopColor: this.props.arrowColor || 'white' }]} />) : (<View/>) }
							</View>

					</View>
				</Modal>
			)
		}

		close_modal() {
			this.setState({
				modalVisible: false,
			})
			this.props.onClose && this.props.onClose()
		}

		open_modal() {
			this.setState({
				modalVisible: true,
			})
			this.props.onOpen && this.props.onOpen()
		}

		show() {
			this.open_modal()
		}

		close() {
			this.close_modal()
		}

	}

	Popup.PropTypes = {
		top: React.PropTypes.number,
		left: React.PropTypes.number,
		arrowOffset: React.PropTypes.number,
		arrowDirection: React.PropTypes.oneOf(['up', 'down']),
		height: React.PropTypes.number,
		onOpen: React.PropTypes.func,
		onClose: React.PropTypes.func,
		backgroundColor: React.PropTypes.string,
	}

	const styles = StyleSheet.create({
		overlay: {
			flex: 1,
			backgroundColor: 'rgba(0,0,0,0.4)'
		},
		contents: {

		},

		triangle: {
			width: 0,
			height: 0,
			backgroundColor: 'transparent',
			borderStyle: 'solid',
			borderLeftWidth: 6,
			borderRightWidth: 6,
			borderBottomWidth: 12,
			borderLeftColor: 'transparent',
			borderRightColor: 'transparent',
		},

		triangleDown: {
			width: 0,
			height: 0,
			backgroundColor: 'transparent',
			borderStyle: 'solid',
			borderLeftWidth: 6,
			borderRightWidth: 6,
			borderTopWidth: 12,
			borderLeftColor: 'transparent',
			borderRightColor: 'transparent',
		}

	})

export default Popup
