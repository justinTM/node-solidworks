const path = require('path')
const url = require('url')
const edge = require('edge-js')


var helloWorld = edge.func(function () {/*
  #r "C:\node-solidworks\SldWorks.dll"
  #r "C:\node-solidworks\SwCommands.dll"
  #r "C:\node-solidworks\SwConst.dll"

  using SwConst;
  using SwCommands;
  using SldWorks;
  using System.Threading.Tasks;

    public class Startup
    {
      public async Task<object> Invoke(object input)
      {
          SldWorks.SldWorks swApp;
          GetSolidworksModelFromFile('')
          return null;
      }


      // Opens and returns a model, given a file path. Returns currently-active model if already open
      public ModelDoc2 GetSolidworksModelFromFile(string filePath)
      {
          return null;
      }
    }
*/});

helloWorld('JavaScript', function (error, result) {
  if (error) throw error;
  console.log(result);
});