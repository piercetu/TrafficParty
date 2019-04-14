// Lobby Page
import React, { PureComponent } from 'react';
import { Image, StyleSheet, Text, TextInput, ScrollView, TouchableOpacity, View, FlatList } from 'react-native';
// import Voice from 'react-native-voice';

import { connect } from 'react-redux';

import { addWords } from './Redux/actions';

class Lobby extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
        data: [],
        dots: '...',
        ascending: true,
        activeIndex: 0
    };

    this.interval = null;
    this.indexInterval = null;
  }

  componentDidMount() {
      this.interval = setInterval(() => {
        if (this.state.dots.length === 1 && !this.state.ascending) {
            this.setState({
                dots: this.state.dots.concat('.'),
                ascending: true
            });
        } else if (this.state.dots.length === 4 && this.state.ascending) {
            this.setState({
                dots: this.state.dots.substring(0, this.state.dots.length - 1),
                ascending: false
            });
        } else if (this.state.ascending) {
            this.setState({ dots: this.state.dots.concat('.') });
        } else if (!this.state.ascending) {
            this.setState({ dots: this.state.dots.substring(0, this.state.dots.length - 1) });
        }
      }, 3000);

      this.indexInterval = setInterval(() => {
        this.setState({ activeIndex: this.state.activeIndex + 1 });
      }, 6000)
  }

  componentWillUnmount() {
      clearInterval(this.interval);
      clearInterval(this.indexInterval);
  }

  static getDerivedStateFromProps(props, state) {
      if (props.user !== state.user && props.user) {
          return {
              data: [{
                  name: props.user.name,
                  image: '../resources/person3.png',
                  index: 0
              }, {
                  name: 'aggressive lemon',
                  image: '../resources/person2.png',
                  index: 1
              }, {
                  name: 'bent string',
                  image: '../resources/person1.png',
                  index: 2
              }, {
                  name: 'slow pencil',
                  image: '../resources/person4.png',
                  index: 3
              }]
          };
      }

      return null;
  }

  renderList = () => {
    if (this.state.data && this.state.data.length)
        return (
            <FlatList 
                data={this.state.data}
                renderItem={this.renderItem}
            />
        );
    else return null;
  }

  renderItem = ({item}) => {
      if (item.name === this.state.data[0].name) {
          return (
            <View style={this.state.activeIndex === item.index ? styles.blockMain : styles.block} key={item.name}>
                <Image style={styles.logo} source={require('../resources/person3.png')} />
                <View style={styles.currentSubblock}>
                    <Text style={styles.h2Main}>{item.name}</Text>
                    <Text style={styles.h3Main}>Chair</Text>
                </View>
            </View>
          );
      } else {

          return (
            <View style={this.state.activeIndex === item.index ? styles.blockMain : styles.block} key={item.name}>
                <Image style={styles.logo} source={require('../resources/person2.png')} />
                <View style={styles.subblock}>
                    <Text style={styles.h2}>{item.name}</Text>
                </View>
            </View>
          );
      }
  }

  // Hide the header bar section
  static navigationOptions = {
    header: null
  }

  render() {
    const { navigate } = this.props.navigation;
    if (this.state.activeIndex + 1 === this.state.data.length) {
        navigate('Final');
    }

    return (
      <ScrollView>
        { this.state.activeIndex === 0 ? <Text style={styles.h1}>Speak a noun {this.state.dots}</Text> : <Text style={styles.h1}>Waiting for other players {this.state.dots}</Text> }
        {this.renderList()}
        {/* <View style={styles.blockMain}>
          <Image style={styles.logo} source={require('../resources/person3.png')} />
          <View style={styles.currentSubblock}>
            <Text style={styles.h2Main}>Nhat</Text>
            <Text style={styles.h3Main}>Chair</Text>
          </View>

        </View>

        <View style={styles.block}>
          <Image style={styles.logo} source={require('../resources/person2.png')} />
          <View style={styles.subblock}>
            <Text style={styles.h2}>Pierce</Text>
          </View>
        </View>

        <View style={styles.block}>
          <Image style={styles.logo} source={require('../resources/person1.png')} />
          <View style={styles.subblock}>
            <Text style={styles.h2}>Leimmi</Text>
          </View>
        </View>

        <View style={styles.block}>
          <Image style={styles.logo} source={require('../resources/person4.png')} />
          <View style={styles.subblock}>
            <Text style={styles.h2}>Anna</Text>
          </View>
        </View>

        <View style={styles.block}>
          <Image style={styles.logo} source={require('../resources/person2.png')} />
          <View style={styles.subblock}>
            <Text style={styles.h2}>Pierce</Text>
          </View>
        </View>

        <View style={styles.block}>
          <Image style={styles.logo} source={require('../resources/person1.png')} />
          <View style={styles.subblock}>
            <Text style={styles.h2}>Leimmi</Text>
          </View>
        </View>

        <View style={styles.block}>
          <Image style={styles.logo} source={require('../resources/person4.png')} />
          <View style={styles.subblock}>
            <Text style={styles.h2}>Anna</Text>
          </View>
        </View>

        <View style={styles.block}>
          <Image style={styles.logo} source={require('../resources/person2.png')} />
          <View style={styles.subblock}>
            <Text style={styles.h2}>Pierce</Text>
          </View>
        </View>

        <View style={styles.block}>
          <Image style={styles.logo} source={require('../resources/person1.png')} />
          <View style={styles.subblock}>
            <Text style={styles.h2}>Leimmi</Text>
          </View>
        </View> */}

      </ScrollView>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  h1: {
    textAlign: 'center',
    color: '#C239B3',
    fontWeight: 'bold',
    marginTop: 120,
    marginBottom: 50,
    fontSize: 30,
  },
  logo: {
    height: 80,
    width: 80,
  },
  block: {
    // borderWidth: 1,
    paddingRight: 16,
    paddingLeft: 32,
    marginBottom: 10,
    flex: 1,
    flexDirection: 'row',
  },
  blockMain: {
    backgroundColor: '#C239B3',
    borderRadius: 10,
    // borderWidth: 1,
    paddingRight: 16,
    paddingLeft: 16,
    marginLeft: 16,
    marginRight: 16,
    marginBottom: 10,
    flex: 1,
    flexDirection: 'row',
  },
  currentSubblock: {
    marginLeft: '4%',
  },
  subblock: {
    marginLeft: '4%',
  },
  h2: {
    color: '#C239B3',
    fontWeight: 'bold',
    fontSize: 20,
  },
  h2Main: {
    color: '#FEB9C8',
    fontWeight: 'bold',
    fontSize: 20,
  },
  h3Main: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 26,
  },
});

const mapStateToProps = state => {
    return {
        user: state.auth.user
    };
};

export default connect(mapStateToProps, { addWords })(Lobby);