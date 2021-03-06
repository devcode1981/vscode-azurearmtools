// ----------------------------------------------------------------------------
// Copyright (c) Microsoft Corporation.  All rights reserved.
// ----------------------------------------------------------------------------

// tslint:disable:no-unused-expression max-func-body-length promise-function-async max-line-length no-unnecessary-class
// tslint:disable:no-non-null-assertion object-literal-key-quotes variable-name no-constant-condition
// tslint:disable:prefer-template no-http-string export-name

import { IDeploymentTemplate } from "./support/diagnostics";

// =========== 101-acsengine-swarmmode/azuredeploy.json

export let template_101_acsengine_swarmmode: IDeploymentTemplate = {
    "$schema": "https://schema.management.azure.com/schemas/2019-04-01/deploymentTemplate.json#",
    "contentVersion": "1.0.0.0",
    "parameters": {
        "agentCount": {
            "minValue": 1,
            "maxValue": 100,
            "defaultValue": 2,
            "metadata": {
                "description": "The number of agents for the cluster.  This value can be from 1 to 100"
            },
            "type": "int"
        },
        "agentEndpointDNSNamePrefix": {
            "metadata": {
                "description": "Sets the Domain name label for the agent pool IP Address.  The concatenation of the domain name label and the regional DNS zone make up the fully qualified domain name associated with the public IP address."
            },
            "type": "string"
        },
        "agentSubnet": {
            "defaultValue": "10.0.0.0/16",
            "metadata": {
                "description": "Sets the subnet of agent pool 'agent'."
            },
            "type": "string"
        },
        "agentVMSize": {
            "allowedValues": [
                "Basic_A2",
                "Basic_A3",
                "Basic_A4",
                "Standard_A10",
                "Standard_A11",
                "Standard_A2",
                "Standard_A2_v2",
                "Standard_A2m_v2",
                "Standard_A3",
                "Standard_A4",
                "Standard_A4_v2",
                "Standard_A4m_v2",
                "Standard_A5",
                "Standard_A6",
                "Standard_A7",
                "Standard_A8",
                "Standard_A8_v2",
                "Standard_A8m_v2",
                "Standard_A9",
                "Standard_D11",
                "Standard_D11_v2",
                "Standard_D12",
                "Standard_D12_v2",
                "Standard_D13",
                "Standard_D13_v2",
                "Standard_D14",
                "Standard_D14_v2",
                "Standard_D15_v2",
                "Standard_D2",
                "Standard_D2_v2",
                "Standard_D3",
                "Standard_D3_v2",
                "Standard_D4",
                "Standard_D4_v2",
                "Standard_D5_v2",
                "Standard_DS11",
                "Standard_DS11_v2",
                "Standard_DS12",
                "Standard_DS12_v2",
                "Standard_DS13",
                "Standard_DS13_v2",
                "Standard_DS14",
                "Standard_DS14_v2",
                "Standard_DS15_v2",
                "Standard_DS2",
                "Standard_DS2_v2",
                "Standard_DS3",
                "Standard_DS3_v2",
                "Standard_DS4",
                "Standard_DS4_v2",
                "Standard_DS5_v2",
                "Standard_F16",
                "Standard_F16s",
                "Standard_F2",
                "Standard_F2s",
                "Standard_F4",
                "Standard_F4s",
                "Standard_F8",
                "Standard_F8s",
                "Standard_G1",
                "Standard_G2",
                "Standard_G3",
                "Standard_G4",
                "Standard_G5",
                "Standard_GS1",
                "Standard_GS2",
                "Standard_GS3",
                "Standard_GS4",
                "Standard_GS5",
                "Standard_H16",
                "Standard_H16m",
                "Standard_H16mr",
                "Standard_H16r",
                "Standard_H8",
                "Standard_H8m",
                "Standard_NC12",
                "Standard_NC24",
                "Standard_NC24r",
                "Standard_NC6",
                "Standard_NV12",
                "Standard_NV24",
                "Standard_NV6"
            ],
            "defaultValue": "Standard_D2_v2",
            "metadata": {
                "description": "The size of the Virtual Machine."
            },
            "type": "string"
        },
        "firstConsecutiveStaticIP": {
            "defaultValue": "172.16.0.5",
            "metadata": {
                "description": "Sets the static IP of the first master"
            },
            "type": "string"
        },
        "linuxAdminUsername": {
            "metadata": {
                "description": "User name for the Linux Virtual Machines (SSH or Password)."
            },
            "type": "string"
        },
        "location": {
            "defaultValue": "[resourceGroup().location]",
            "metadata": {
                "description": "Sets the location for all resources in the cluster"
            },
            "type": "string"
        },
        "masterEndpointDNSNamePrefix": {
            "metadata": {
                "description": "Sets the Domain name label for the master IP Address.  The concatenation of the domain name label and the regional DNS zone make up the fully qualified domain name associated with the public IP address."
            },
            "type": "string"
        },
        "masterSubnet": {
            "defaultValue": "172.16.0.0/24",
            "metadata": {
                "description": "Sets the subnet of the master node(s)."
            },
            "type": "string"
        },
        "masterVMSize": {
            "allowedValues": [
                "Basic_A2",
                "Basic_A3",
                "Basic_A4",
                "Standard_A10",
                "Standard_A11",
                "Standard_A2",
                "Standard_A2_v2",
                "Standard_A2m_v2",
                "Standard_A3",
                "Standard_A4",
                "Standard_A4_v2",
                "Standard_A4m_v2",
                "Standard_A5",
                "Standard_A6",
                "Standard_A7",
                "Standard_A8",
                "Standard_A8_v2",
                "Standard_A8m_v2",
                "Standard_A9",
                "Standard_D11",
                "Standard_D11_v2",
                "Standard_D12",
                "Standard_D12_v2",
                "Standard_D13",
                "Standard_D13_v2",
                "Standard_D14",
                "Standard_D14_v2",
                "Standard_D15_v2",
                "Standard_D2",
                "Standard_D2_v2",
                "Standard_D3",
                "Standard_D3_v2",
                "Standard_D4",
                "Standard_D4_v2",
                "Standard_D5_v2",
                "Standard_DS11",
                "Standard_DS11_v2",
                "Standard_DS12",
                "Standard_DS12_v2",
                "Standard_DS13",
                "Standard_DS13_v2",
                "Standard_DS14",
                "Standard_DS14_v2",
                "Standard_DS15_v2",
                "Standard_DS2",
                "Standard_DS2_v2",
                "Standard_DS3",
                "Standard_DS3_v2",
                "Standard_DS4",
                "Standard_DS4_v2",
                "Standard_DS5_v2",
                "Standard_F16",
                "Standard_F16s",
                "Standard_F2",
                "Standard_F2s",
                "Standard_F4",
                "Standard_F4s",
                "Standard_F8",
                "Standard_F8s",
                "Standard_G1",
                "Standard_G2",
                "Standard_G3",
                "Standard_G4",
                "Standard_G5",
                "Standard_GS1",
                "Standard_GS2",
                "Standard_GS3",
                "Standard_GS4",
                "Standard_GS5",
                "Standard_H16",
                "Standard_H16m",
                "Standard_H16mr",
                "Standard_H16r",
                "Standard_H8",
                "Standard_H8m",
                "Standard_NC12",
                "Standard_NC24",
                "Standard_NC24r",
                "Standard_NC6",
                "Standard_NV12",
                "Standard_NV24",
                "Standard_NV6"
            ],
            "metadata": {
                "description": "The size of the Virtual Machine."
            },
            "type": "string"
        },
        "nameSuffix": {
            "defaultValue": "13957614",
            "metadata": {
                "description": "A string hash of the master DNS name to uniquely identify the cluster."
            },
            "type": "string"
        },
        "sshRSAPublicKey": {
            "metadata": {
                "description": "SSH public key used for auth to all Linux machines.  Not Required.  If not set, you must provide a password key."
            },
            "type": "string"
        }
    },
    "variables": {
        "adminUsername": "[parameters('linuxAdminUsername')]",
        "agentCount": "[parameters('agentCount')]",
        "agentCustomScript": "[concat('/usr/bin/nohup /bin/bash -c \"/bin/bash /opt/azure/containers/',variables('configureClusterScriptFile'), ' ',variables('clusterInstallParameters'),' >> /var/log/azure/cluster-bootstrap.log 2>&1 &\" &')]",
        "agentEndpointDNSNamePrefix": "[tolower(parameters('agentEndpointDNSNamePrefix'))]",
        "agentIPAddressName": "[concat(variables('orchestratorName'), '-agent-ip-', variables('agentEndpointDNSNamePrefix'), '-', variables('nameSuffix'))]",
        "agentLbBackendPoolName": "[concat(variables('orchestratorName'), '-agent-', variables('nameSuffix'))]",
        "agentLbID": "[resourceId('Microsoft.Network/loadBalancers',variables('agentLbName'))]",
        "agentLbIPConfigID": "[concat(variables('agentLbID'),'/frontendIPConfigurations/', variables('agentLbIPConfigName'))]",
        "agentLbIPConfigName": "[concat(variables('orchestratorName'), '-agent-', variables('nameSuffix'))]",
        "agentLbName": "[concat(variables('orchestratorName'), '-agent-', variables('nameSuffix'))]",
        "agentRunCmd": "[concat('runcmd:\n -  [ /bin/bash, /opt/azure/containers/install-cluster.sh ]\n\n')]",
        "agentRunCmdFile": "[concat(' -  content: |\n        #!/bin/bash\n        ','sudo mkdir -p /var/log/azure\n        ',variables('agentCustomScript'),'\n    path: /opt/azure/containers/install-cluster.sh\n    permissions: \"0744\"\n')]",
        "agentSubnet": "[parameters('agentSubnet')]",
        "agentSubnetName": "[concat(variables('orchestratorName'), '-agentsubnet')]",
        "agentVMNamePrefix": "[concat(variables('orchestratorName'), '-agent-', variables('nameSuffix'))]",
        "agentVMSize": "[parameters('agentVMSize')]",
        "agentVnetSubnetID": "[resourceId('Microsoft.Network/virtualNetworks/subnets', variables('virtualNetworkName'), variables('agentSubnetName'))]",
        "clusterInstallParameters": "[concat(variables('masterCount'), ' ',variables('masterVMNamePrefix'), ' ',variables('masterFirstAddrOctet4'), ' ',variables('adminUsername'),' ',variables('postInstallScriptURI'),' ',variables('masterFirstAddrPrefix'))]",
        "configureClusterScriptFile": "configure-swarmmode-cluster.sh",
        "location": "[variables('locations')[mod(add(2,length(parameters('location'))),add(1,length(parameters('location'))))]]",
        "locations": [
            "[parameters('location')]",
            "[parameters('location')]"
        ],
        "masterAvailabilitySet": "[concat(variables('orchestratorName'), '-master-availabilitySet-', variables('nameSuffix'))]",
        "masterCount": 1,
        "masterCustomScript": "[concat('/bin/bash -c \"/bin/bash /opt/azure/containers/',variables('configureClusterScriptFile'), ' ',variables('clusterInstallParameters'),' >> /var/log/azure/cluster-bootstrap.log 2>&1\"')]",
        "masterEndpointDNSNamePrefix": "[tolower(parameters('masterEndpointDNSNamePrefix'))]",
        "masterFirstAddrOctet4": "[variables('masterFirstAddrOctets')[3]]",
        "masterFirstAddrOctets": "[split(parameters('firstConsecutiveStaticIP'),'.')]",
        "masterFirstAddrPrefix": "[concat(variables('masterFirstAddrOctets')[0],'.',variables('masterFirstAddrOctets')[1],'.',variables('masterFirstAddrOctets')[2],'.')]",
        "masterLbBackendPoolName": "[concat(variables('orchestratorName'), '-master-pool-', variables('nameSuffix'))]",
        "masterLbID": "[resourceId('Microsoft.Network/loadBalancers',variables('masterLbName'))]",
        "masterLbIPConfigID": "[concat(variables('masterLbID'),'/frontendIPConfigurations/', variables('masterLbIPConfigName'))]",
        "masterLbIPConfigName": "[concat(variables('orchestratorName'), '-master-lbFrontEnd-', variables('nameSuffix'))]",
        "masterLbInboundNatRules": [
            [
                {
                    "id": "[concat(variables('masterSshInboundNatRuleIdPrefix'),'0')]"
                },
                {
                    "id": "[concat(variables('masterSshPort22InboundNatRuleIdPrefix'),'0')]"
                }
            ],
            [
                {
                    "id": "[concat(variables('masterSshInboundNatRuleIdPrefix'),'1')]"
                }
            ],
            [
                {
                    "id": "[concat(variables('masterSshInboundNatRuleIdPrefix'),'2')]"
                }
            ],
            [
                {
                    "id": "[concat(variables('masterSshInboundNatRuleIdPrefix'),'3')]"
                }
            ],
            [
                {
                    "id": "[concat(variables('masterSshInboundNatRuleIdPrefix'),'4')]"
                }
            ]
        ],
        "masterLbName": "[concat(variables('orchestratorName'), '-master-lb-', variables('nameSuffix'))]",
        "masterPublicIPAddressName": "[concat(variables('orchestratorName'), '-master-ip-', variables('masterEndpointDNSNamePrefix'), '-', variables('nameSuffix'))]",
        "masterSshInboundNatRuleIdPrefix": "[concat(variables('masterLbID'),'/inboundNatRules/SSH-',variables('masterVMNamePrefix'))]",
        "masterSshPort22InboundNatRuleIdPrefix": "[concat(variables('masterLbID'),'/inboundNatRules/SSHPort22-',variables('masterVMNamePrefix'))]",
        "masterSshPort22InboundNatRuleNamePrefix": "[concat(variables('masterLbName'),'/SSHPort22-',variables('masterVMNamePrefix'))]",
        "masterSubnet": "[parameters('masterSubnet')]",
        "masterSubnetName": "[concat(variables('orchestratorName'), '-masterSubnet')]",
        "masterVMNamePrefix": "[concat(variables('orchestratorName'), '-master-', variables('nameSuffix'), '-')]",
        "masterVMSize": "[parameters('masterVMSize')]",
        "masterVnetSubnetID": "[resourceId('Microsoft.Network/virtualNetworks/subnets', variables('virtualNetworkName'), variables('masterSubnetName'))]",
        "nameSuffix": "[parameters('nameSuffix')]",
        "orchestratorName": "swarmm",
        "osImageOffer": "UbuntuServer",
        "osImagePublisher": "Canonical",
        "osImageSKU": "16.04-LTS",
        "osImageVersion": "16.04.201703070",
        "postInstallScriptURI": "disabled",
        "sshKeyPath": "[concat('/home/', variables('adminUsername'), '/.ssh/authorized_keys')]",
        "sshRSAPublicKey": "[parameters('sshRSAPublicKey')]",
        "virtualNetworkName": "[concat(variables('orchestratorName'), '-vnet-', variables('nameSuffix'))]",
        "vmSizesMap": {
            "Basic_A2": {
                "diskType": "Standard_LRS"
            },
            "Basic_A3": {
                "diskType": "Standard_LRS"
            },
            "Basic_A4": {
                "diskType": "Standard_LRS"
            },
            "Standard_A10": {
                "diskType": "Standard_LRS"
            },
            "Standard_A11": {
                "diskType": "Standard_LRS"
            },
            "Standard_A2": {
                "diskType": "Standard_LRS"
            },
            "Standard_A2_v2": {
                "diskType": "Standard_LRS"
            },
            "Standard_A2m_v2": {
                "diskType": "Standard_LRS"
            },
            "Standard_A3": {
                "diskType": "Standard_LRS"
            },
            "Standard_A4": {
                "diskType": "Standard_LRS"
            },
            "Standard_A4_v2": {
                "diskType": "Standard_LRS"
            },
            "Standard_A4m_v2": {
                "diskType": "Standard_LRS"
            },
            "Standard_A5": {
                "diskType": "Standard_LRS"
            },
            "Standard_A6": {
                "diskType": "Standard_LRS"
            },
            "Standard_A7": {
                "diskType": "Standard_LRS"
            },
            "Standard_A8": {
                "diskType": "Standard_LRS"
            },
            "Standard_A8_v2": {
                "diskType": "Standard_LRS"
            },
            "Standard_A8m_v2": {
                "diskType": "Standard_LRS"
            },
            "Standard_A9": {
                "diskType": "Standard_LRS"
            },
            "Standard_D11": {
                "diskType": "Standard_LRS"
            },
            "Standard_D11_v2": {
                "diskType": "Standard_LRS"
            },
            "Standard_D12": {
                "diskType": "Standard_LRS"
            },
            "Standard_D12_v2": {
                "diskType": "Standard_LRS"
            },
            "Standard_D13": {
                "diskType": "Standard_LRS"
            },
            "Standard_D13_v2": {
                "diskType": "Standard_LRS"
            },
            "Standard_D14": {
                "diskType": "Standard_LRS"
            },
            "Standard_D14_v2": {
                "diskType": "Standard_LRS"
            },
            "Standard_D15_v2": {
                "diskType": "Standard_LRS"
            },
            "Standard_D2": {
                "diskType": "Standard_LRS"
            },
            "Standard_D2_v2": {
                "diskType": "Standard_LRS"
            },
            "Standard_D3": {
                "diskType": "Standard_LRS"
            },
            "Standard_D3_v2": {
                "diskType": "Standard_LRS"
            },
            "Standard_D4": {
                "diskType": "Standard_LRS"
            },
            "Standard_D4_v2": {
                "diskType": "Standard_LRS"
            },
            "Standard_D5_v2": {
                "diskType": "Standard_LRS"
            },
            "Standard_DS11": {
                "diskType": "Premium_LRS"
            },
            "Standard_DS11_v2": {
                "diskType": "Premium_LRS"
            },
            "Standard_DS12": {
                "diskType": "Premium_LRS"
            },
            "Standard_DS12_v2": {
                "diskType": "Premium_LRS"
            },
            "Standard_DS13": {
                "diskType": "Premium_LRS"
            },
            "Standard_DS13_v2": {
                "diskType": "Premium_LRS"
            },
            "Standard_DS14": {
                "diskType": "Premium_LRS"
            },
            "Standard_DS14_v2": {
                "diskType": "Premium_LRS"
            },
            "Standard_DS15_v2": {
                "diskType": "Premium_LRS"
            },
            "Standard_DS2": {
                "diskType": "Premium_LRS"
            },
            "Standard_DS2_v2": {
                "diskType": "Premium_LRS"
            },
            "Standard_DS3": {
                "diskType": "Premium_LRS"
            },
            "Standard_DS3_v2": {
                "diskType": "Premium_LRS"
            },
            "Standard_DS4": {
                "diskType": "Premium_LRS"
            },
            "Standard_DS4_v2": {
                "diskType": "Premium_LRS"
            },
            "Standard_DS5_v2": {
                "diskType": "Premium_LRS"
            },
            "Standard_F16": {
                "diskType": "Standard_LRS"
            },
            "Standard_F16s": {
                "diskType": "Premium_LRS"
            },
            "Standard_F2": {
                "diskType": "Standard_LRS"
            },
            "Standard_F2s": {
                "diskType": "Premium_LRS"
            },
            "Standard_F4": {
                "diskType": "Standard_LRS"
            },
            "Standard_F4s": {
                "diskType": "Premium_LRS"
            },
            "Standard_F8": {
                "diskType": "Standard_LRS"
            },
            "Standard_F8s": {
                "diskType": "Premium_LRS"
            },
            "Standard_G1": {
                "diskType": "Standard_LRS"
            },
            "Standard_G2": {
                "diskType": "Standard_LRS"
            },
            "Standard_G3": {
                "diskType": "Standard_LRS"
            },
            "Standard_G4": {
                "diskType": "Standard_LRS"
            },
            "Standard_G5": {
                "diskType": "Standard_LRS"
            },
            "Standard_GS1": {
                "diskType": "Premium_LRS"
            },
            "Standard_GS2": {
                "diskType": "Premium_LRS"
            },
            "Standard_GS3": {
                "diskType": "Premium_LRS"
            },
            "Standard_GS4": {
                "diskType": "Premium_LRS"
            },
            "Standard_GS5": {
                "diskType": "Premium_LRS"
            },
            "Standard_H16": {
                "diskType": "Standard_LRS"
            },
            "Standard_H16m": {
                "diskType": "Standard_LRS"
            },
            "Standard_H16mr": {
                "diskType": "Standard_LRS"
            },
            "Standard_H16r": {
                "diskType": "Standard_LRS"
            },
            "Standard_H8": {
                "diskType": "Standard_LRS"
            },
            "Standard_H8m": {
                "diskType": "Standard_LRS"
            },
            "Standard_NC12": {
                "diskType": "Standard_LRS"
            },
            "Standard_NC24": {
                "diskType": "Standard_LRS"
            },
            "Standard_NC24r": {
                "diskType": "Standard_LRS"
            },
            "Standard_NC6": {
                "diskType": "Standard_LRS"
            },
            "Standard_NV12": {
                "diskType": "Standard_LRS"
            },
            "Standard_NV24": {
                "diskType": "Standard_LRS"
            },
            "Standard_NV6": {
                "diskType": "Standard_LRS"
            }
        }
    },
    "resources": [
        {
            "apiVersion": "2016-03-30",
            "location": "[variables('location')]",
            "name": "[variables('agentIPAddressName')]",
            "properties": {
                "dnsSettings": {
                    "domainNameLabel": "[variables('agentEndpointDNSNamePrefix')]"
                },
                "publicIPAllocationMethod": "Dynamic"
            },
            "type": "Microsoft.Network/publicIPAddresses"
        },
        {
            "apiVersion": "2016-03-30",
            "type": "Microsoft.Network/loadBalancers",
            "dependsOn": [
                "[concat('Microsoft.Network/publicIPAddresses/', variables('agentIPAddressName'))]"
            ],
            "location": "[variables('location')]",
            "name": "[variables('agentLbName')]",
            "properties": {
                "backendAddressPools": [
                    {
                        "name": "[variables('agentLbBackendPoolName')]"
                    }
                ],
                "frontendIPConfigurations": [
                    {
                        "name": "[variables('agentLbIPConfigName')]",
                        "properties": {
                            "publicIPAddress": {
                                "id": "[resourceId('Microsoft.Network/publicIPAddresses',variables('agentIPAddressName'))]"
                            }
                        }
                    }
                ],
                "inboundNatRules": [
                ],
                "loadBalancingRules": [
                    {
                        "name": "LBRule80",
                        "properties": {
                            "backendAddressPool": {
                                "id": "[concat(variables('agentLbID'), '/backendAddressPools/', variables('agentLbBackendPoolName'))]"
                            },
                            "backendPort": 80,
                            "enableFloatingIP": false,
                            "frontendIPConfiguration": {
                                "id": "[variables('agentLbIPConfigID')]"
                            },
                            "frontendPort": 80,
                            "idleTimeoutInMinutes": 5,
                            "loadDistribution": "Default",
                            "probe": {
                                "id": "[concat(variables('agentLbID'),'/probes/tcp80Probe')]"
                            },
                            "protocol": "Tcp"
                        }
                    },
                    {
                        "name": "LBRule443",
                        "properties": {
                            "backendAddressPool": {
                                "id": "[concat(variables('agentLbID'), '/backendAddressPools/', variables('agentLbBackendPoolName'))]"
                            },
                            "backendPort": 443,
                            "enableFloatingIP": false,
                            "frontendIPConfiguration": {
                                "id": "[variables('agentLbIPConfigID')]"
                            },
                            "frontendPort": 443,
                            "idleTimeoutInMinutes": 5,
                            "loadDistribution": "Default",
                            "probe": {
                                "id": "[concat(variables('agentLbID'),'/probes/tcp443Probe')]"
                            },
                            "protocol": "Tcp"
                        }
                    },
                    {
                        "name": "LBRule8080",
                        "properties": {
                            "backendAddressPool": {
                                "id": "[concat(variables('agentLbID'), '/backendAddressPools/', variables('agentLbBackendPoolName'))]"
                            },
                            "backendPort": 8080,
                            "enableFloatingIP": false,
                            "frontendIPConfiguration": {
                                "id": "[variables('agentLbIPConfigID')]"
                            },
                            "frontendPort": 8080,
                            "idleTimeoutInMinutes": 5,
                            "loadDistribution": "Default",
                            "probe": {
                                "id": "[concat(variables('agentLbID'),'/probes/tcp8080Probe')]"
                            },
                            "protocol": "Tcp"
                        }
                    }
                ],
                "probes": [
                    {
                        "name": "tcp80Probe",
                        "properties": {
                            "intervalInSeconds": 5,
                            "numberOfProbes": 2,
                            "port": 80,
                            "protocol": "Tcp"
                        }
                    },
                    {
                        "name": "tcp443Probe",
                        "properties": {
                            "intervalInSeconds": 5,
                            "numberOfProbes": 2,
                            "port": 443,
                            "protocol": "Tcp"
                        }
                    },
                    {
                        "name": "tcp8080Probe",
                        "properties": {
                            "intervalInSeconds": 5,
                            "numberOfProbes": 2,
                            "port": 8080,
                            "protocol": "Tcp"
                        }
                    }
                ]
            }
        },
        {
            "apiVersion": "2017-03-30",
            "type": "Microsoft.Compute/virtualMachineScaleSets",
            "dependsOn": [
                "[concat('Microsoft.Network/publicIPAddresses/', variables('masterPublicIPAddressName'))]",
                "[variables('virtualNetworkName')]",
                "[variables('agentLbID')]"
            ],
            "location": "[variables('location')]",
            "name": "[concat(variables('agentVMNamePrefix'), '-vmss')]",
            "properties": {
                "upgradePolicy": {
                    "mode": "Automatic"
                },
                "virtualMachineProfile": {
                    "networkProfile": {
                        "networkInterfaceConfigurations": [
                            {
                                "name": "nic",
                                "properties": {
                                    "ipConfigurations": [
                                        {
                                            "name": "nicipconfig",
                                            "properties": {
                                                "loadBalancerBackendAddressPools": [
                                                    {
                                                        "id": "[concat(variables('agentLbID'), '/backendAddressPools/', variables('agentLbBackendPoolName'))]"
                                                    }
                                                ],
                                                "subnet": {
                                                    "id": "[variables('agentVnetSubnetID')]"
                                                }
                                            }
                                        }
                                    ],
                                    "primary": true
                                }
                            }
                        ]
                    },
                    "osProfile": {
                        "adminUsername": "[variables('adminUsername')]",
                        "computerNamePrefix": "[variables('agentVMNamePrefix')]",
                        "customData": "[base64(concat('#cloud-config\n\nwrite_files:\n -  encoding: gzip\n    content: !!binary |\n        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\n    path: /opt/azure/containers/configure-swarmmode-cluster.sh\n    permissions: \"0744\"\n\n',variables('agentRunCmdFile'),variables('agentRunCmd')))]",
                        "linuxConfiguration": {
                            "disablePasswordAuthentication": true,
                            "ssh": {
                                "publicKeys": [
                                    {
                                        "keyData": "[parameters('sshRSAPublicKey')]",
                                        "path": "[variables('sshKeyPath')]"
                                    }
                                ]
                            }
                        }
                    },
                    "storageProfile": {
                        "imageReference": {
                            "offer": "[variables('osImageOffer')]",
                            "publisher": "[variables('osImagePublisher')]",
                            "sku": "[variables('osImageSKU')]",
                            "version": "latest"
                        },
                        "osDisk": {
                            "caching": "ReadWrite",
                            "createOption": "FromImage",
                            "managedDisk": {
                                "storageAccountType": "[variables('vmSizesMap')[variables('agentVMSize')].diskType]"
                            }
                        }
                    }
                }
            },
            "sku": {
                "capacity": "[variables('agentCount')]",
                "name": "[variables('agentVMSize')]",
                "tier": "Standard"
            },
            "tags": {
                "creationSource": "[concat('acsengine-', variables('agentVMNamePrefix'), '-vmss')]"
            }
        },
        {
            "apiVersion": "2016-03-30",
            "location": "[variables('location')]",
            "name": "[variables('virtualNetworkName')]",
            "properties": {
                "addressSpace": {
                    "addressPrefixes": [
                        "[variables('masterSubnet')]",
                        "[variables('agentSubnet')]"
                    ]
                },
                "subnets": [
                    {
                        "name": "[variables('masterSubnetName')]",
                        "properties": {
                            "addressPrefix": "[variables('masterSubnet')]"
                        }
                    },
                    {
                        "name": "[variables('agentSubnetName')]",
                        "properties": {
                            "addressPrefix": "[variables('agentSubnet')]"
                        }
                    }
                ]
            },
            "type": "Microsoft.Network/virtualNetworks"
        },
        {
            "apiVersion": "2017-03-30",
            "type": "Microsoft.Compute/availabilitySets",
            "location": "[variables('location')]",
            "name": "[variables('masterAvailabilitySet')]",
            "properties": {
                "PlatformUpdateDomainCount": 20,
                "PlatformFaultDomainCount": 2
            },
            "sku": {
                "name": "Aligned"
            }
        },
        {
            "apiVersion": "2016-03-30",
            "location": "[variables('location')]",
            "name": "[variables('masterPublicIPAddressName')]",
            "properties": {
                "dnsSettings": {
                    "domainNameLabel": "[variables('masterEndpointDNSNamePrefix')]"
                },
                "publicIPAllocationMethod": "Dynamic"
            },
            "type": "Microsoft.Network/publicIPAddresses"
        },
        {
            "apiVersion": "2016-03-30",
            "dependsOn": [
                "[concat('Microsoft.Network/publicIPAddresses/', variables('masterPublicIPAddressName'))]"
            ],
            "location": "[variables('location')]",
            "name": "[variables('masterLbName')]",
            "properties": {
                "backendAddressPools": [
                    {
                        "name": "[variables('masterLbBackendPoolName')]"
                    }
                ],
                "frontendIPConfigurations": [
                    {
                        "name": "[variables('masterLbIPConfigName')]",
                        "properties": {
                            "publicIPAddress": {
                                "id": "[resourceId('Microsoft.Network/publicIPAddresses',variables('masterPublicIPAddressName'))]"
                            }
                        }
                    }
                ]
            },
            "type": "Microsoft.Network/loadBalancers"
        },
        {
            "apiVersion": "2019-12-01",
            "copy": {
                "count": "[variables('masterCount')]",
                "name": "masterLbLoopNode"
            },
            "dependsOn": [
                "[variables('masterLbID')]"
            ],
            "location": "[variables('location')]",
            "name": "[concat(variables('masterLbName'), '/', 'SSH-', variables('masterVMNamePrefix'), copyIndex())]",
            "properties": {
                "backendPort": 22,
                "enableFloatingIP": false,
                "frontendIPConfiguration": {
                    "id": "[variables('masterLbIPConfigID')]"
                },
                "frontendPort": "[copyIndex(2200)]",
                "protocol": "Tcp"
            },
            "type": "Microsoft.Network/loadBalancers/inboundNatRules"
        },
        {
            "apiVersion": "2019-12-01",
            "dependsOn": [
                "[variables('masterLbID')]"
            ],
            "location": "[variables('location')]",
            "name": "[concat(variables('masterSshPort22InboundNatRuleNamePrefix'), '0')]",
            "properties": {
                "backendPort": 2222,
                "enableFloatingIP": false,
                "frontendIPConfiguration": {
                    "id": "[variables('masterLbIPConfigID')]"
                },
                "frontendPort": 22,
                "protocol": "Tcp"
            },
            "type": "Microsoft.Network/loadBalancers/inboundNatRules"
        },
        {
            "apiVersion": "2016-03-30",
            "copy": {
                "count": "[variables('masterCount')]",
                "name": "nicLoopNode"
            },
            "dependsOn": [
                "[variables('virtualNetworkName')]",
                "[variables('masterLbID')]",
                "[concat(variables('masterSshPort22InboundNatRuleIdPrefix'),'0')]",
                "[concat(variables('masterSshInboundNatRuleIdPrefix'),copyIndex())]"
            ],
            "location": "[variables('location')]",
            "name": "[concat(variables('masterVMNamePrefix'), 'nic-', copyIndex())]",
            "properties": {
                "ipConfigurations": [
                    {
                        "name": "ipConfigNode",
                        "properties": {
                            "loadBalancerBackendAddressPools": [
                                {
                                    "id": "[concat(variables('masterLbID'), '/backendAddressPools/', variables('masterLbBackendPoolName'))]"
                                }
                            ],
                            "loadBalancerInboundNatRules": "[variables('masterLbInboundNatRules')[copyIndex()]]",
                            "privateIPAddress": "[concat(variables('masterFirstAddrPrefix'), copyIndex(int(variables('masterFirstAddrOctet4'))))]",
                            "privateIPAllocationMethod": "Static",
                            "subnet": {
                                "id": "[variables('masterVnetSubnetID')]"
                            }
                        }
                    }
                ]
            },
            "type": "Microsoft.Network/networkInterfaces"
        },
        {
            "apiVersion": "2017-03-30",
            "type": "Microsoft.Compute/virtualMachines",
            "copy": {
                "count": "[variables('masterCount')]",
                "name": "vmLoopNode"
            },
            "dependsOn": [
                "[concat('Microsoft.Network/networkInterfaces/', variables('masterVMNamePrefix'), 'nic-', copyIndex())]",
                "[concat('Microsoft.Compute/availabilitySets/',variables('masterAvailabilitySet'))]"
            ],
            "location": "[variables('location')]",
            "name": "[concat(variables('masterVMNamePrefix'), copyIndex())]",
            "properties": {
                "availabilitySet": {
                    "id": "[resourceId('Microsoft.Compute/availabilitySets',variables('masterAvailabilitySet'))]"
                },
                "hardwareProfile": {
                    "vmSize": "[variables('masterVMSize')]"
                },
                "networkProfile": {
                    "networkInterfaces": [
                        {
                            "id": "[resourceId('Microsoft.Network/networkInterfaces',concat(variables('masterVMNamePrefix'), 'nic-', copyIndex()))]"
                        }
                    ]
                },
                "osProfile": {
                    "adminUsername": "[variables('adminUsername')]",
                    "computerName": "[concat(variables('masterVMNamePrefix'), copyIndex())]",
                    "customData": "[base64('#cloud-config\n\nwrite_files:\n -  encoding: gzip\n    content: !!binary |\n        H4sIACkUqlkAA81ZbXPbNhL+zl+xpTW1nYaipDSXOWeUG8dWLp6rLY9kd24uaWOIhCzWFKEQoGSfq/9+u3ihSFmK3TaZOWUSkuAC++wunt0Fs/NdOEqycMTkxPN2/vzP24EjkY2T6yLnMFywfAqnIubQzzi8FbceCVxMEglJJhVLUwlqwmEs0lQskuwaIjGdiYxnSqJgAMciuuF55RZXRwHJ9VBl/SmTiudyfZhdm6X+gkGe5AqCW8/j0USAj6hzRUgrWqK0IO0I3ljOVCIy34uZ4t5MAsPJx/2jf/UGn476p+f9Ye/Tz73B8KR/1vXbzXan2fLrCNGKc5azKTcm1eGcHg4veoOj/uXZRbdx317agfNB793Jv3Gk40benQyGF4fHxwMcfLH0Dv9zOehdDnv0+OPSQxgXJ2co8NNPw6PByfnF5eAE37xcem8Ph73h5duzHq3/t6X38+nZ4WmvezURUmUI6opGLk/f4kpX2icNIwG/g+Qx7Mqw+ezDr63g77983PugLz983H/WCD+2w12aa5Fumftxr5y9/8xOd3NtCE51rHEnFJk6gEbFIX5d4jzn4+S2FDGK12TeJblUcBjHeSlXOs6Jzqdk94ED64adG8wLffscnH16sK5x5Vh8uXpwr8sA4dvy3t/IRs2y6VRk8K7IItptG/c4OiyTSMTD/+I/Z1wtRH6zt+/dewA7YF5p+mXmFdA/El/a5/ecpWpy123j0FjkkCBp4b7dxC27fA2xwGGAxTXRox/GfB5mRZrCRKnZQUjZ5LqJbNZCyRg+QOMfEPDP0IJf9BgqzvQNgXF7CyZMwojzDBUWWUyMQrIV3AquAWvZYeO/qiWYYCZGyLcyo5yzG30/TvRFppzPoE1rxJhxPIeyrgMCTFwGcgl4o7pMKKfyObCRMEnCZjnfesEkCPMwA2ZWu00UdDyLqxYX8goJRiyDnEuRzvmTotNahad0bJD8v0fiWwQCPUfP1nna6ch0LuWfj9FyA6m8932baq8qDseElUhTmMDSTlvm1/MRdLs4VCaLuok5V0WeAfmXp5JXx9oODy5a6nntpjrfaI9gjcIrs1XS93AaQtPFcQXs4Ro1VevqWzX1eq0va89MNTbajQdaJ+faa37jfpUPl437tTy83JwFTSJ0sZU8HRMFjs+G24Rtom24aJUJncpPEQtQHOPGIOQqCimQ8qFe1HhiNkzZnGxRY8VoizFDIN0c0LOZiVbZvWeebSjqZG6tp9pA5QmX8CPeYSTyuwAXzrDQFVRAg2DBEqXHu+2XEHzuBzohS8zIOLsZa0WUl8nkyVdNCcZq26ZZwxCSLKIICTfG2vD0ZLz0VIIKa+7BToxihHbmU4Gmsn+CMadSLp3vL2fYfK08DTHjVC3FTNdKdHxBAty8PdYv++adDQKYDTG9iZMcgpnZEvIO+TGN7TW0zkQ88yTizdgz7hpSh+gUU+TTBMVReQYHnRevXsJeJoAVavIcRoWiQM8xfe2TqF2BpVKgsylhKcBCGoMSuiAUWXILklZWwBSEc5aHeZGVSPCywk69PAQR7BqXfBganCbAvVseaaDdtcewkLk+Cpg10c/vQUVU0VtN/cfYgKMEBoe3gPDhzZOcFoo5z/Mk5k0iyK6L/Nb4bGBX/WTg10llR8u2R7sGi+G3JFqiJsWISGatDSMDIsx5ypnkEscXWSpYHDY2HwzsxMBODK4KU1PkVXk7vSIPU7RSEbG0EjM36xuwu67gW7Dcne+iCZH8h9tHTDQ5weytSKWW6Bgw8q59abaaSxZYL2iju964lnor3RfSy05YdTAaN41t7b1erDaR1u2WyMbiq0ajDqO1MQM/aLyqiPBYGrA/2hrXtG5vyFYAKr2YX++eXErfXKm3/bD4RuXXhSTD7JgXKXLUxhSoKs9yQTuR/9FTv7e5jyp7Ntc0YL9WdnC2f8Ge7XU1jCtXHKFrdR1i2KIu7DcDLARjfep07dhqlo2O1HLawCBgMWZIlWAWoN4VGnuVFnOfsvErFDI1ZquEiY7r4Fb4hhz9GbP8zmLBqoJEmmnIWHN+E7ivsXHD/leuPnqsAGucyFOuxA3Puv62N4fR5yLJeawJY37bjyxbFm/sWedg6am731Qk4zNCHOgJmJPRqAx7zny/tu4aBx9E7osGtB4IrthTmpbU7dBselmOWUpVwWxWVmGY+T0AuiWIkSjSONtVRJaMR4pCqSO37dRTrufOOQ8MqW1MvS0C6+Y18Bti88rlFn3s2H5Yec/mhExi22JbJsQ9Q7zQwR9gQlxwJDheOx3CbbN7DLjNwZfhr+dGthHaG+/cTQ7bvu1G5IT+xp/sMe8RSEOuDH3nLEnZKEkTdQdi7BxNZ5sD2LXHiF2NlxXUg5Qe08cf080Ql6vraFF3BlkhWTtKOSiHevjp/NzMzS/y8suc/Ap8pLNylY6PU/FJNKxTsLJrq9QrafdkytXAVINQ8kv7/1FmVVhlsf01NtmdgkZs+ogL32F9inEbjbAvo68JtQ3tGk8E+lwfTm6S6IZQi/EYuUbfm+zpVkZ5MlNkRfk/A3Sa8GvNcaf15O54M9jfkSCTYlbR8eaNOdek4jpk9I0ltJ/Xg5EQSqqczQICanE2UQ46b75vw/fmy4Kxs+wC6JzE0U4krbPIfJLXX+eNMDWTKVcI/PGP+naK6zhM50lcdH5j2R32I1OG1ZuSmRgrXJNOJRu4LSeFoohAQIli4dkKvQPkPmjDFFs+zBu4utNnEs+DoFQXcp74H9DolC7TGQAA\n    path: /opt/azure/containers/configure-swarmmode-cluster.sh\n    permissions: \"0744\"\n\n')]",
                    "linuxConfiguration": {
                        "disablePasswordAuthentication": true,
                        "ssh": {
                            "publicKeys": [
                                {
                                    "keyData": "[variables('sshRSAPublicKey')]",
                                    "path": "[variables('sshKeyPath')]"
                                }
                            ]
                        }
                    }
                },
                "storageProfile": {
                    "imageReference": {
                        "offer": "[variables('osImageOffer')]",
                        "publisher": "[variables('osImagePublisher')]",
                        "sku": "[variables('osImageSKU')]",
                        "version": "[variables('osImageVersion')]"
                    },
                    "osDisk": {
                        "name": "[concat(variables('masterVMNamePrefix'), copyIndex(),'_OSDisk')]",
                        "caching": "ReadWrite",
                        "createOption": "FromImage",
                        "managedDisk": {
                            "storageAccountType": "[variables('vmSizesMap')[variables('masterVMSize')].diskType]"
                        }
                    }
                }
            },
            "tags": {
                "creationSource": "[concat('acsengine-', variables('masterVMNamePrefix'), copyIndex())]"
            }
        },
        {
            "apiVersion": "2016-03-30",
            "type": "Microsoft.Compute/virtualMachines/extensions",
            "copy": {
                "count": "[variables('masterCount')]",
                "name": "vmLoopNode"
            },
            "dependsOn": [
                "[concat('Microsoft.Compute/virtualMachines/', concat(variables('masterVMNamePrefix'), copyIndex()))]"
            ],
            "location": "[variables('location')]",
            "name": "[concat(variables('masterVMNamePrefix'), copyIndex(), '/configuremaster')]",
            "properties": {
                "publisher": "Microsoft.OSTCExtensions",
                "settings": {
                    "commandToExecute": "[variables('masterCustomScript')]",
                    "fileUris": [
                    ]
                },
                "type": "CustomScriptForLinux",
                "typeHandlerVersion": "1.4",
                "autoUpgradeMinorVersion": true,
                "protectedSettings": {
                    "commandToExecute": ""
                }
            }
        }
    ],
    "outputs": {
        "agentFQDN": {
            "type": "string",
            "value": "[reference(concat('Microsoft.Network/publicIPAddresses/', variables('agentIPAddressName'))).dnsSettings.fqdn]"
        },
        "masterFQDN": {
            "type": "string",
            "value": "[reference(concat('Microsoft.Network/publicIPAddresses/', variables('masterPublicIPAddressName'))).dnsSettings.fqdn]"
        }
    }
};

// =========== 101-app-service-regional-vnet-integration/azuredeploy.json

export const template_101_app_service_regional_vnet_integration: IDeploymentTemplate = {
    "$schema": "https://schema.management.azure.com/schemas/2015-01-01/deploymentTemplate.json#",
    "contentVersion": "1.0.0.0",
    "parameters": {
        "appName": {
            "type": "string",
            "defaultValue": "[uniqueString(resourceGroup().id)]",
            "metadata": {
                "description": "The name of the app to create."
            }
        },
        "appServicePlanName": {
            "type": "string",
            "defaultValue": "[uniqueString(subscription().subscriptionId)]",
            "metadata": {
                "description": "The name of the app service plan to create."
            }
        },
        "location": {
            "type": "string",
            "defaultValue": "[resourceGroup().location]",
            "metadata": {
                "description": "The location in which all resources should be deployed."
            }
        }
    },
    "variables": {
        "vnetName": "vnet",
        "vnetAddressPrefix": "10.0.0.0/16",
        "subnetName": "myappservice",
        "subnetAddressPrefix": "10.0.0.0/24",
        "appServicePlanSku": "S1"
    },
    "resources": [
        {
            "type": "Microsoft.Network/virtualNetworks",
            "apiVersion": "2019-11-01",
            "name": "[variables('vnetName')]",
            "location": "[parameters('location')]",
            "properties": {
                "addressSpace": {
                    "addressPrefixes": [
                        "[variables('vnetAddressPrefix')]"
                    ]
                },
                "subnets": [
                    {
                        "name": "[variables('subnetName')]",
                        "properties": {
                            "addressPrefix": "[variables('subnetAddressPrefix')]",
                            "delegations": [
                                {
                                    "name": "delegation",
                                    "properties": {
                                        "serviceName": "Microsoft.Web/serverFarms"
                                    }
                                }
                            ]
                        }
                    }
                ]
            }
        },
        {
            "type": "Microsoft.Web/serverfarms",
            "apiVersion": "2019-08-01",
            "name": "[parameters('appServicePlanName')]",
            "location": "[parameters('location')]",
            "sku": {
                "name": "[variables('appServicePlanSku')]"
            },
            "kind": "app"
        },
        {
            "type": "Microsoft.Web/sites",
            "apiVersion": "2019-08-01",
            "name": "[parameters('appName')]",
            "location": "[parameters('location')]",
            "kind": "app",
            "dependsOn": [
                "[resourceId('Microsoft.Web/serverFarms', parameters('appServicePlanName'))]",
                "[resourceId('Microsoft.Network/virtualNetworks', variables('vnetName'))]"
            ],
            "properties": {
                "serverFarmId": "[resourceId('Microsoft.Web/serverFarms', parameters('appServicePlanName'))]"
            },
            "resources": [
                {
                    "name": "virtualNetwork",
                    "type": "networkConfig",
                    "apiVersion": "2019-08-01",
                    "dependsOn": [
                        "[resourceId('Microsoft.Web/sites', parameters('appName'))]"
                    ],
                    "properties": {
                        "subnetResourceId": "[resourceId('Microsoft.Network/virtualNetworks/subnets', variables('vnetName'), variables('subnetName'))]",
                        "swiftSupported": true
                    }
                }
            ]
        }
    ]
};

// =========== 101-acsengine-swarmmode/azuredeploy.json

export let template_201_time_series_insights_environment_with_eventhub: IDeploymentTemplate = {
    "$schema": "https://schema.management.azure.com/schemas/2019-04-01/deploymentTemplate.json#",
    "contentVersion": "1.0.0.0",
    "parameters": {
        "eventHubNewOrExisting": {
            "type": "string",
            "defaultValue": "new",
            "metadata": {
                "description": "Determines whether or not a new Event Hub is provisioned."
            }
        },
        "eventHubResourceGroup": {
            "type": "string",
            "defaultValue": "[resourceGroup().name]",
            "metadata": {
                "description": "If you have an existing Event Hub provide the Resource Group name here."
            }
        },
        "eventHubNamespaceName": {
            "type": "string",
            "defaultValue": "tsiquickstartns",
            "metadata": {
                "description": "The namespace of the source event hub."
            }
        },
        "eventHubName": {
            "type": "string",
            "defaultValue": "tsiquickstarteh",
            "metadata": {
                "description": "The name of the source event hub."
            }
        },
        "consumerGroupName": {
            "type": "string",
            "defaultValue": "tsiquickstart",
            "metadata": {
                "description": "The name of the consumer group that the Time Series Insights service will use to read the data from the event hub. NOTE: To avoid resource contention, this consumer group must be dedicated to the Time Series Insights service and not shared with other readers."
            }
        },
        "environmentName": {
            "type": "string",
            "maxLength": 90,
            "defaultValue": "tsiquickstart",
            "metadata": {
                "description": "Name of the environment. The name cannot include:   '<', '>', '%', '&', ':', '\\', '?', '/' and any control characters. All other characters are allowed."
            }
        },
        "environmentDisplayName": {
            "type": "string",
            "defaultValue": "tsiquickstart",
            "maxLength": 90,
            "metadata": {
                "description": "An optional friendly name to show in tooling or user interfaces instead of the environment name."
            }
        },
        "environmentSkuName": {
            "type": "string",
            "defaultValue": "S1",
            "allowedValues": ["S1", "S2"],
            "metadata": {
                "description": "The name of the sku. For more information, see https://azure.microsoft.com/pricing/details/time-series-insights/"
            }
        },
        "environmentSkuCapacity": {
            "type": "int",
            "defaultValue": 1,
            "minValue": 1,
            "maxValue": 10,
            "metadata": {
                "description": "The unit capacity of the Sku. For more information, see https://azure.microsoft.com/pricing/details/time-series-insights/"
            }
        },
        "environmentDataRetentionTime": {
            "type": "string",
            "defaultValue": "P30D",
            "metadata": {
                "description": "The minimum timespan the environment’s events will be available for query. The value must be specified in the ISO 8601 format, e.g. \"P30D\" for a retention policy of 30 days."
            }
        },
        "eventSourceName": {
            "type": "string",
            "defaultValue": "tsiquickstart",
            "maxLength": 90,
            "metadata": {
                "description": "Name of the event source child resource. The name cannot include:   '<', '>', '%', '&', ':', '\\', '?', '/' and any control characters. All other characters are allowed."
            }
        },
        "eventSourceDisplayName": {
            "type": "string",
            "defaultValue": "tsiquickstart",
            "maxLength": 90,
            "metadata": {
                "description": "An optional friendly name to show in tooling or user interfaces instead of the event source name."
            }
        },
        "eventSourceTimestampPropertyName": {
            "type": "string",
            "defaultValue": "",
            "maxLength": 90,
            "metadata": {
                "description": "The event property that will be used as the event source's timestamp. If a value isn't specified for timestampPropertyName, or if null or empty-string is specified, the event creation time will be used."
            }
        },
        "eventSourceKeyName": {
            "type": "string",
            "defaultValue": "manage",
            "metadata": {
                "description": "The name of the shared access key that the Time Series Insights service will use to connect to the event hub."
            }
        },
        "accessPolicyReaderObjectIds": {
            "type": "array",
            "defaultValue": [],
            "metadata": {
                "description": "A list of object ids of the users or applications in AAD that should have Reader access to the environment. The service principal objectId can be obtained by calling the Get-AzureRMADUser or the Get-AzureRMADServicePrincipal cmdlets. Creating an access policy for AAD groups is not yet supported."
            }
        },
        "accessPolicyContributorObjectIds": {
            "type": "array",
            "defaultValue": [],
            "metadata": {
                "description": "A list of object ids of the users or applications in AAD that should have Contributor access to the environment. The service principal objectId can be obtained by calling the Get-AzureRMADUser or the Get-AzureRMADServicePrincipal cmdlets. Creating an access policy for AAD groups is not yet supported."
            }
        },
        "location": {
            "type": "string",
            "defaultValue": "[resourceGroup().location]",
            "metadata": {
                "description": "Location for all resources."
            }
        }
    },
    "variables": {
        "environmentTagsOptions": [
            null,
            {
                "displayName": "[parameters('environmentDisplayName')]"
            }
        ],
        "environmentTagsValue": "[variables('environmentTagsOptions')[length(take(parameters('environmentDisplayName'), 1))]]",
        "eventSourceTagsOptions": [
            null,
            {
                "displayName": "[parameters('eventSourceDisplayName')]"
            }
        ],
        "eventSourceTagsValue": "[variables('eventSourceTagsOptions')[length(take(parameters('eventSourceDisplayName'), 1))]]",
        "eventSourceResourceId": "[resourceId(parameters('eventHubResourceGroup'), 'Microsoft.EventHub/Namespaces/EventHubs', parameters('eventHubNamespaceName'), parameters('eventHubName'))]"
    },
    "resources": [
        {
            "condition": "[equals(parameters('eventHubNewOrExisting'), 'new')]",
            "apiVersion": "2017-04-01",
            "name": "[parameters('eventHubNamespaceName')]",
            "type": "Microsoft.EventHub/namespaces",
            "location": "[parameters('location')]",
            "sku": {
                "name": "Standard"
            },
            "properties": {
                "isAutoInflateEnabled": true,
                "maximumThroughputUnits": 20
            },
            "resources": [
                {
                    "condition": "[equals(parameters('eventHubNewOrExisting'), 'new')]",
                    "apiVersion": "2017-04-01",
                    "name": "[parameters('eventHubName')]",
                    "type": "eventhubs",
                    "dependsOn": ["[parameters('eventHubNamespaceName')]"],
                    "properties": {
                        "messageRetentionInDays": 7,
                        "partitionCount": 4
                    },
                    "resources": [
                        {
                            "condition": "[equals(parameters('eventHubNewOrExisting'), 'new')]",
                            "type": "authorizationRules",
                            "name": "[parameters('eventSourceKeyName')]",
                            "apiVersion": "2017-04-01",
                            "location": "[parameters('location')]",
                            "dependsOn": ["[parameters('eventHubName')]"],
                            "properties": {
                                "rights": ["Listen", "Send", "Manage"]
                            }
                        },
                        {
                            "condition": "[equals(parameters('eventHubNewOrExisting'), 'new')]",
                            "apiVersion": "2017-04-01",
                            "name": "[parameters('consumerGroupName')]",
                            "type": "consumergroups",
                            "dependsOn": ["[parameters('eventHubName')]"]
                        }
                    ]
                }
            ]
        },
        {
            "type": "Microsoft.TimeSeriesInsights/environments",
            "name": "[parameters('environmentName')]",
            "apiVersion": "2017-11-15",
            "location": "[parameters('location')]",
            "properties": {
                "dataRetentionTime": "[parameters('environmentDataRetentionTime')]"
            },
            "sku": {
                "name": "[parameters('environmentSkuName')]",
                "capacity": "[parameters('environmentSkuCapacity')]"
            },
            "tags": "[variables('environmentTagsValue')]",
            "resources": [
                {
                    "type": "eventsources",
                    "name": "[parameters('eventSourceName')]",
                    "apiVersion": "2017-11-15",
                    "location": "[parameters('location')]",
                    "kind": "Microsoft.EventHub",
                    "dependsOn": [
                        "[resourceId('Microsoft.TimeSeriesInsights/environments/', parameters('environmentName'))]",
                        "[resourceId('Microsoft.EventHub/Namespaces', parameters('eventHubNamespaceName'))]",
                        "[resourceId('Microsoft.EventHub/Namespaces/EventHubs/ConsumerGroups', parameters('eventHubNamespaceName'), parameters('eventHubName'), parameters('consumerGroupName'))]",
                        "[resourceId('Microsoft.EventHub/Namespaces/EventHubs/AuthorizationRules', parameters('eventHubNamespaceName'), parameters('eventHubName'), parameters('eventSourceKeyName'))]",
                        "[resourceId('Microsoft.EventHub/namespaces/eventhubs/authorizationRules',parameters('eventHubNamespaceName'),parameters('eventHubName'),parameters('eventSourceKeyName'))]"
                    ],
                    "properties": {
                        "eventSourceResourceId": "[variables('eventSourceResourceId')]",
                        "eventHubName": "[parameters('eventHubName')]",
                        "serviceBusNamespace": "[parameters('eventHubNamespaceName')]",
                        "consumerGroupName": "[parameters('consumerGroupName')]",
                        "keyName": "[parameters('eventSourceKeyName')]",
                        "sharedAccessKey": "[listkeys(resourceId(parameters('eventHubResourceGroup'), 'Microsoft.EventHub/Namespaces/EventHubs/AuthorizationRules', parameters('eventHubNamespaceName'), parameters('eventHubName'), parameters('eventSourceKeyName')), '2017-04-01').primaryKey]",
                        "timestampPropertyName": "[parameters('eventSourceTimestampPropertyName')]"
                    },
                    "tags": "[variables('eventSourceTagsValue')]"
                }
            ]
        },
        {
            "condition": "[not(empty(parameters('accessPolicyReaderObjectIds')))]",
            "type": "Microsoft.TimeSeriesInsights/environments/accessPolicies",
            "name": "[concat(parameters('environmentName'), '/', 'readerAccessPolicy', copyIndex())]",
            "copy": {
                "name": "accessPolicyReaderCopy",
                "count": "[if(empty(parameters('accessPolicyReaderObjectIds')), 1, length(parameters('accessPolicyReaderObjectIds')))]"
            },
            "apiVersion": "2017-11-15",
            "dependsOn": [
                "[resourceId('Microsoft.TimeSeriesInsights/environments/', parameters('environmentName'))]"
            ],
            "properties": {
                "principalObjectId": "[parameters('accessPolicyReaderObjectIds')[copyIndex()]]",
                "roles": ["Reader"]
            }
        },
        {
            "condition": "[not(empty(parameters('accessPolicyContributorObjectIds')))]",
            "type": "Microsoft.TimeSeriesInsights/environments/accessPolicies",
            "name": "[concat(parameters('environmentName'), '/', 'contributorAccessPolicy', copyIndex())]",
            "copy": {
                "name": "accessPolicyContributorCopy",
                "count": "[if(empty(parameters('accessPolicyContributorObjectIds')), 1, length(parameters('accessPolicyContributorObjectIds')))]"
            },
            "apiVersion": "2017-11-15",
            "dependsOn": [
                "[resourceId('Microsoft.TimeSeriesInsights/environments/', parameters('environmentName'))]"
            ],
            "properties": {
                "principalObjectId": "[parameters('accessPolicyContributorObjectIds')[copyIndex()]]",
                "roles": ["Contributor"]
            }
        }
    ],
    "outputs": {
        "dataAccessFQDN": {
            "value": "[reference(resourceId('Microsoft.TimeSeriesInsights/environments', parameters('environmentName'))).dataAccessFQDN]",
            "type": "string"
        }
    }
};
