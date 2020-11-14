using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Anim__Teleporter : MonoBehaviour
{

    public void TeleportDown()
    {
        gameObject.GetComponent<Animator>().SetBool("TeleportDown", true);
    }

    public void TeleportUp()
    {
        gameObject.GetComponent<Animator>().SetBool("TeleportDown", false);
    }

    
}
