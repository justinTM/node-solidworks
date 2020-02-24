const path = require('path')
const url = require('url')
const edge = require('edge-js')


var helloWorld = edge.func(function () {/*
  #r "C:\node-solidworks\SldWorks.dll"
  #r "C:\node-solidworks\SwCommands.dll"
  #r "C:\node-solidworks\SwConst.dll"

  using System.Threading.Tasks;  // for `async Task`
  using System.IO;  // for `FileInfo(filepath)`
  using System;  // for `Console.WriteLine()` to write to console

  using SwConst;
  using SwCommands;
  using SldWorks;

    public class Startup
    {
      string filepath = "C:\\node-solidworks-master\\SimpleRectangle.SLDPRT";
      private static SldWorks.SldWorks swApp;

      public async Task<object> Invoke(object input)
      {

        swApp = new SldWorks.SldWorks();
        OpenSolidworks();
        GetSolidworksModelFromFile(filepath);
        return null;
      }


      // Opens and returns a model, given a file path.
      //    Returns currently-active model if already open.
      public ModelDoc2 GetSolidworksModelFromFile(string filePath)
      {
        // Declare variables
        ModelDoc2 currentModel = default(ModelDoc2);
        string fileName = new FileInfo(filePath).Name;
        int i_errors = 0;
        int i_warnings = 0;

        // Check if Solidworks.exe is open
            if (swApp == null)
            {
              OpenSolidworks();
            }

        return null;
      }


      // Open Solidworks
      public void OpenSolidworks() {
        Console.WriteLine("Opening Solidworks.exe ...");

        // // If any parts are open, notify and exit script
        // if (swApp.ActiveDoc != null)
        // {
        //   Console.WriteLine("Solidworks already open...");
        //   return;
        // }
        // else
        // {
        //   swApp.Visible = true;
        //   Console.WriteLine("Opened Solidworks.exe successfully.");
        // }
      }
    }
*/});

helloWorld('JavaScript', function (error, result) {
  if (error) throw error;
  console.log(result);
});