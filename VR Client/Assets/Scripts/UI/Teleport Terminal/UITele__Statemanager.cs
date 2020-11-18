using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;


public class UITele__Statemanager : MonoBehaviour
{
    public GameObject loading;
    private GameObject loadingInstance;
    public GameObject connection;
    private GameObject connectionInstance;
    public GameObject code;
    private GameObject codeInstance;
    public GameObject teleporter;
    public GameObject textCode;

    


	// Start is called before the first frame update
	void Start()
    {
        StartCoroutine(PlaceholderScript());

    }

    //Set the loading state

    public void SetLoading()
    {
		GameObject child = Instantiate(loading, loading.transform.position, Quaternion.identity);
        child.transform.parent = gameObject.transform;
        child.GetComponent<RectTransform>().localPosition = new Vector3(0, 0, 0);
        loadingInstance = child;
    }

    //Done loading
    IEnumerator LoadingDone(GameObject lo)
    {
        lo.GetComponent<Animator>().SetBool("Complete", true);
        yield return new WaitForSeconds(2);
        Destroy(lo);
    }

    //Done connecting
    IEnumerator Connected(GameObject cd)
    {
        cd.GetComponent<Animator>().SetBool("Connected", true);
        yield return new WaitForSeconds(2);
        Destroy(cd);
    }
    //Set the Connection state
    public void SetConnection()
    {
        StartCoroutine(Connected(codeInstance));
        GameObject child = Instantiate(connection, connection.transform.position, Quaternion.identity);
        child.transform.parent = gameObject.transform;
        child.GetComponent<RectTransform>().localPosition = new Vector3(1.6418f, -17.5f, 0.10014f);
        child.GetComponent<RectTransform>().localScale = new Vector3(0.81757f, 0.81757f, 0.81757f);
        child.GetComponent<RectTransform>().localRotation = Quaternion.Euler(0, 0, 0);
        connectionInstance = child;
        StartCoroutine(LowerTeleporter());
    }

    // Set the code state
    public IEnumerator SetCode(string key)
    {
        yield return new WaitForSeconds(6);
        StartCoroutine(LoadingDone(loadingInstance));
        GameObject child = Instantiate(code, code.transform.position, Quaternion.identity);
        textCode = GameObject.FindGameObjectWithTag("Code");
        textCode.GetComponent<Text>().text = key;
        child.transform.parent = gameObject.transform;
        child.GetComponent<RectTransform>().localPosition = new Vector3(31.5f, 0, 0.232f);
        child.GetComponent<RectTransform>().localScale = new Vector3(1, 1, 1);
        child.GetComponent<RectTransform>().localRotation = Quaternion.Euler(0, 0, 0);
        codeInstance = child;
    }


    public IEnumerator LowerTeleporter()
    {
        yield return new WaitForSeconds(6);
        teleporter.GetComponent<Anim__Teleporter>().TeleportDown();
    }

  

    //Placeholder script since their is no real connection in place yet.
    IEnumerator PlaceholderScript()
    {
        yield return new WaitForSeconds(3);
        SetLoading();
    }

}
