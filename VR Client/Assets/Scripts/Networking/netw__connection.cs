using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using SocketIO;


public class netw__connection : MonoBehaviour
{
	public SocketIOComponent socket;
    public GameObject UITele;
    private string characters = "0123456789abcdefghijklmnopqrstuvwxABCDEFGHIJKLMNOPQRSTUVWXYZ";
    Dictionary<string, string> connectionData;
    public bool connectionMade;
    // Start is called before the first frame update
    void Start()
	{
		GameObject go = GameObject.Find("SocketIO");
		socket = go.GetComponent<SocketIOComponent>();
		socket.On("connected", connected);
        socket.On("overseerConnected", roomEnter);
	}

    public void roomEnter(SocketIOEvent e)
    {
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
            connectionMade = true;
            CreateConnectionObj();
            socket.Emit("connectionPackage", new JSONObject(connectionData));
            StartCoroutine(UITele.GetComponent<UITele__Statemanager>().SetCode(connectionData["code"]));
        }
    }

	// Update is called once per frame
	void Update()
	{

	}
}
