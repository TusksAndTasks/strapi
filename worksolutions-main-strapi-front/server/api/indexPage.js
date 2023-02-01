const { logError, axiosInstance} = require("./blog/helpers");
const { teamPeople } = require("./team/index");
const exp = require("constants");

exports.indexPageTeamHandler = async function(req, render) {
  try {
    return render({ teamPeople });
  } catch (e) {
    logError(e);
    return render({ teamPeople: [] });
  }
};

async function getData(res, url){
  try {
    const response = await axiosInstance.get(url);
    console.log(response)
    const strippedRes = response.data.data.attributes ? response.data.data.attributes : response.data.data
    res.send(strippedRes)
    return strippedRes
  } catch (e) {
    logError(e);
    res.send([]);
  }
}

exports.getReviews = async function(req, res) {
  return await getData(res, "/api/reviews?populate=*")
}

exports.getTitleData = async function(req, res) {
  return await getData(res, "/api/title-data?populate=*")
}

exports.getEmail = async function(req, res) {
  return await getData(res, "/api/ws-email?populate=*")
}

exports.getLogo = async function(req, res) {
  return await getData(res, "/api/ws-logo?populate=*")
}

exports.getPartners = async function(req, res) {
  return await getData(res, "/api/partners?populate=*")
}

exports.getAbout = async function(req, res){
  return await getData(res, "/api/data-numbers?populate=*")
}

exports.getFeatures = async function(req, res){
  return await getData(res, '/api/features?populate=*')
}

exports.getTechnologies = async function(req, res){
  return await getData(res, '/api/logo?populate=deep')
}

exports.getTeam = async function(req, res){
  return await getData(res, '/api/team-members?populate=*')
}

exports.getDevs = async function(req, res){
  return await getData(res, '/api/developer?populate=*')
}