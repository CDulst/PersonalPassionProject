using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using FMSocketIO;


public class netw__connection : MonoBehaviour
{
	public SocketIOComponent socket;
	public bool checkConnection = false;
    public GameObject UITele;
    public GameObject BrowserVieww;
	public GameObject go;
    public GameObject Cam;
    private string characters = "0123456789abcdefghijklmnopqrstuvwx";
    Dictionary<string, string> connectionData;
    public bool connectionMade;
    // Start is called before the first frame update
    void Start()
	{
		socket.On("overseerConnected", roomEnter);
	}

    public void roomEnter(SocketIOEvent e)
    {
		Debug.Log("test");
        BrowserVieww.SetActive(true);
		UITele.GetComponent<UITele__Statemanager>().SetConnection();
    }

    public string RandomCode()
    {
        string code = "";

        for (int i = 0; i < 5; i++)
        {
            int number = Random.Range(0, characters.Length);
            code += characters[number];
        }

        return code;
    }

    public void CreateConnectionObj()
    {
        connectionData = new Dictionary<string, string>();
        connectionData["id"] = socket.GetComponent<SocketIOComponent>().sid;
        connectionData["name"] = "test subject";
        connectionData["type"] = "vr";
        connectionData["code"] = RandomCode();
    }

    public void connected(SocketIOEvent e)
    {
        if (!connectionMade)
        {
			Debug.Log("hello");
			connectionMade = true;
            CreateConnectionObj();
			var Jn = new JSONObject(connectionData);
			socket.Emit("connectionPackage", Jn.ToString());
            StartCoroutine(UITele.GetComponent<UITele__Statemanager>().SetCode(connectionData["code"]));
        }
    }

	// Update is called once per frame
	void Update()
	{
        if (!checkConnection)
		{
			socket = go.GetComponent<SocketIOComponent>();
			if (socket)
			{
				checkConnection = true;
				socket.On("connected", connected);
				socket.On("overseerConnected", roomEnter);
			}
		}
	}
}
