import PropTypes from 'prop-types'
import React, { Component } from 'react'
import styled from 'styled-components'
import { Animated, Easing, ActivityIndicator } from 'react-native'
import colors from 'app/theme/colors'

const Wrapper = styled(Animated.View)`
  background-color: ${props => props.backgrounColor || `${colors.scooter}80`};
  justify-content: center;
  position: absolute;
  right: 0;
  left: 0;
  top: 0;
  bottom: 0;
  z-index: 10;
`

class LoadingView extends Component {
  state = {
    textTimeline: new Animated.Value(0),
    show: false
  }

  componentDidMount() {
    if (this.props.loading) this.startAnimation()
  }

  componentWillReceiveProps(nextProps) {
    if (!nextProps.loading && this.props.loading) this.endAnimation()

    if (nextProps.loading && !this.props.loading && !this.state.show) {
      this.setState({ show: true })
      this.startAnimation()
    }
  }

  startAnimation = () => {
    const { textTimeline } = this.state

    this.setState({ show: true })

    textTimeline.setValue(0)

    Animated.timing(textTimeline, {
      toValue: 100,
      useNativeDriver: true,
      duration: 150,
      easing: Easing.out(Easing.ease)
    }).start()
  }

  endAnimation = () => {
    Animated.timing(this.state.textTimeline, {
      toValue: 200,
      useNativeDriver: true,
      duration: 100,
      easing: Easing.out(Easing.ease)
    }).start(() => this.setState({ show: false }))
  }

  animatedWrapperStyle = () => ({
    opacity: this.state.textTimeline.interpolate({
      inputRange: [0, 100, 200],
      outputRange: [0, this.props.opacity, 0]
    })
  })

  animatedIndicatorStyle = () => ({
    opacity: this.state.textTimeline.interpolate({
      inputRange: [0, 100, 200],
      outputRange: [0, this.props.opacity, 0]
    }),
    transform: [
      {
        translateY: this.state.textTimeline.interpolate({
          inputRange: [0, 100, 200],
          outputRange: [200, 0, -200]
        })
      }
    ]
  })

  render() {
    if (!this.state.show) {
      return null
    }

    return (
      <Wrapper
        style={this.animatedWrapperStyle()}
        backgrounColor={this.props.backgrounColor}>
        <Animated.View style={this.animatedIndicatorStyle()}>
          <ActivityIndicator size={'large'} color={this.props.indicatorColor} />
        </Animated.View>
      </Wrapper>
    )
  }
}

LoadingView.propTypes = {
  loading: PropTypes.bool,
  backgrounColor: PropTypes.string,
  indicatorColor: PropTypes.string,
  opacity: PropTypes.number
}

LoadingView.defaultProps = {
  loading: false,
  backgrounColor: null,
  indicatorColor: '#ffffff',
  opacity: 1
}

export default LoadingView
