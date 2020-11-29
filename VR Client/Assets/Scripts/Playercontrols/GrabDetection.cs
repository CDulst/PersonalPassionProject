using System.Collections;
using System.Collections.Generic;
using UnityEngine;


public class GrabDetection : MonoBehaviour {
    public OVRGrabber leftGrabber;
    public OVRGrabber rightGrabber;
    public SimpleShoot shooter;
    public OVRGrabbable gun;
    public OVRInput.Button shootingButtonL;
    public OVRInput.Button shootingButtonR;
    public bool left;
    public bool right;
    // Start is called before the first frame update
 

    // Update is called once per frame
    void Update()
    {
        if (gun.grabbedBy == leftGrabber)
        {
        
            left = true;
            right = false;
        }
        else if (gun.grabbedBy == rightGrabber)
        {
            right = true;
            left = false;
        }
        if (right)
        {
            if (OVRInput.GetDown(shootingButtonR))
            {
                shooter.Shoot();
            }
        }
        else if (left)
        {
            if (OVRInput.GetDown(shootingButtonL))
            {
                shooter.Shoot();
            }
        }
    }
}
